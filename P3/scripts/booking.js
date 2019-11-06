class Attachment {
    constructor(id, distance) {
        this.nodeId = id;
        this.distance = distance;
    }
}

class Node {
    constructor(x, y, info) {
        this.x = x;
        this.y = y;
        this.info = info;
        this.attachments = [];
        this.size = 40;
        this.dGrid = [];
    }

    addAttachment(id, dist) {
        this.attachments.push(new Attachment(id, dist));
    }
}

class Grid {
    constructor(nodeContainerEl, canvas, info, recap) {
        this.nodeContainerEl = nodeContainerEl;
        this.canvas = canvas;
        this.info = info;
        this.recap = recap;
        this.grid = [];
        this.points = [-1, -1];
        this.path = [];
    }

    generateRecapInstanceHTML(id) {
        let main = document.createElement("div");
        //imgEl skulle egentlig være et bilde, men det breaka ting, so now we're here
        let imgEl = document.createElement("div");
        let outerEl = document.createElement("div");
        let nameEl = document.createElement("h4");
        let daysToStayEl = document.createElement("div");
        let inputEl = document.createElement("input");
        let imgContainer = document.createElement("div");
        main.className = "recapInstance";
        nameEl.className = "hytteNavn";
        daysToStayEl.className = "daysToStay";
        imgContainer.className = "imgContainer";
        //imgEl.src = "../img/hytter/" + this.grid[id].info.img[0][0];
        nameEl.innerHTML = this.grid[id].info.name;

        inputEl.type = "number";
        inputEl.name = "inputElNr_" + id;
        inputEl.id = "inputElNr_" + id;
        inputEl.max = "7";
        inputEl.min = "0";
        inputEl.value = "1";
        inputEl.addEventListener("change", () => {
            this.refreshRecap()
        })
        daysToStayEl.innerHTML = "Dager å bli: ";
        daysToStayEl.appendChild(inputEl);

        outerEl.appendChild(nameEl);
        outerEl.appendChild(document.createElement("br"));
        outerEl.appendChild(daysToStayEl);
        //imgContainer.appendChild(imgEl);
        main.appendChild(imgEl);
        main.appendChild(outerEl);
        return main;
    }

    refreshRecap() {
        let elements = [];
        let inputs = document.querySelectorAll(".daysToStay>input")
        let existingElements = document.querySelectorAll(".recapInstance");
        if (this.points.includes(-1)) {
            this.points.filter(el => el != -1).forEach((el, i) => {
                let generatedElement = this.generateRecapInstanceHTML(el);
                if (typeof (inputs[i]) == "undefined" || inputs.id == generatedElement.childNodes[1].childNodes[2].childNodes[1].id) {
                    elements.push(generatedElement);
                } else {
                    elements.push(existingElements[i])
                }
                //elements[i] = generatedElement;
            });
        } else {
            //console.log(this.path)
            this.path.filter(el => el != -1).forEach((el, i) => {
                let generatedElement = this.generateRecapInstanceHTML(el);
                if (typeof (inputs[i]) == "undefined" || inputs.id == generatedElement.childNodes[1].childNodes[2].childNodes[1].id) {
                    elements.push(generatedElement);
                } else {
                    elements.push(existingElements[i])
                }
                //elements.push(this.generateRecapInstanceHTML(el))
            });
        }
        console.log(elements);
        this.recap.innerHTML = "<h2>Den gjeldende turen</h2>";
        elements.forEach(el => {
            this.recap.appendChild(el)
        });


        let totalPrice = 0;
        inputs = document.querySelectorAll(".daysToStay>input")

        if (this.points.includes(-1)) {
            this.points.filter(el => el != -1).forEach((el, i) => {
                totalPrice += inputs[i].value * this.grid[el].info.price;
                console.log(totalPrice)
            });
        } else {
            console.log(this.path)
            this.path.filter(el => el != -1).forEach((el, i) => {
                totalPrice += inputs[i].value * this.grid[el].info.price;
                console.log(totalPrice)
            });
        }

        //Lager pris-elementet og bestill nå knappen
        let priceEl = document.createElement("h3");
        let buttonEl = document.createElement("button")
        buttonEl.addEventListener("click", () => {
            this.order(totalPrice)
        })
        buttonEl.innerText = "Bestill";
        priceEl.innerText = "Totalpris: " + totalPrice;
        this.recap.appendChild(priceEl);
        this.recap.appendChild(buttonEl);
    }

    order(totalPrice) {
        let inputs = document.querySelectorAll(".daysToStay>input")
        //order er en todimensjonal array, der hver indre array inneholder hyttens id og dager man blir.
        let orders = []
        if (this.points.includes(-1)) {
            this.points.filter(el => el != -1).forEach((el, i) => {
                let order = [el, Number(inputs[i].value)];
                orders.push(order);
            });
        } else {
            this.path.filter(el => el != -1).forEach((el, i) => {
                let order = [el, Number(inputs[i].value)];
                orders.push(order)
            });
        }
        localStorage.setItem('orders', JSON.stringify(orders));
        localStorage.setItem('totalPrice', totalPrice);
        //console.log(orders);
    }

    initDjikstra(id) {
        this.grid[id].dGrid = new DGrid(this.grid, id);
    }

    getPath(fromId, toId) {
        console.log(fromId, toId, this.grid[fromId].dGrid.length);
        if (this.grid[fromId].dGrid.length <= 0) {
            console.log("instantiate")
            this.initDjikstra(fromId);
            return this.getPath(fromId, toId);
        }
        let dGrid = this.grid[fromId].dGrid.dGrid
        let path = [toId];
        let currentNode = dGrid[toId];
        while (currentNode.shortestOrigin != "origin") {
            path.push(currentNode.shortestOrigin);
            currentNode = dGrid[currentNode.shortestOrigin];
        }
        return path;


    }

    addNode(x, y, info) {
        this.grid.push(new Node(x, y, info));
        //this.render()
        return this.grid.length - 1;
    }

    attach(id1, id2, dist) {
        let distToSet = dist;
        if (typeof (dist) == "undefined") {
            let id1x = this.grid[id1].x;
            let id1y = this.grid[id1].y;
            let id2x = this.grid[id2].x;
            let id2y = this.grid[id2].y;

            distToSet = Math.sqrt(Math.pow((id1x - id2x), 2) + Math.pow((id1y - id2y), 2));
        }
        let isDuplicate = false;
        this.grid[id1].attachments.forEach(attachment => {
            if (!isDuplicate) {
                //console.log(attachment.nodeId, id2);
                isDuplicate = attachment.nodeId == id2;
            }
        });

        if (!isDuplicate) {
            this.grid[id1].addAttachment(id2, distToSet);
            this.grid[id2].addAttachment(id1, distToSet);
        }
    }

    convertToHTML(info, id) {
        let mainEl = document.createElement("div");

        let titleEl = document.createElement("h2");
        let imgEl = document.createElement("img");
        let infoEl = document.createElement("div");
        let featuresEl = document.createElement("div")
        let buttonDiv = document.createElement("div");
        let button2Div = document.createElement("div")
        let infoSplitEl = document.createElement("div");
        let bottomWrapEl = document.createElement("div");
        let priceEl = document.createElement("div");
        let buttonWrapEl = document.createElement("div");

        buttonWrapEl.className = "buttonWrap";
        mainEl.id = "info";
        bottomWrapEl.id = "bottomWrap";
        infoSplitEl.id = "infoSplit";
        featuresEl.id = "infoFeatures";
        infoEl.id = "infoText";

        buttonDiv.className = "button";
        button2Div.className = "button";
        priceEl.style.marginLeft = "10px";
        titleEl.style.height = "24px";

        priceEl.innerHTML = "Pris per dag: " + info.price + "nok";
        titleEl.innerText = info.name;

        infoEl.innerText = info.text;
        featuresEl.innerHTML = info.features;
        buttonDiv.innerText = "Sett som start";
        button2Div.innerText = "Sett som destinasjon"
        imgEl.src = "../img/hytter/" + info.img[0].kilde;


        buttonWrapEl.appendChild(buttonDiv);
        buttonWrapEl.appendChild(button2Div);
        bottomWrapEl.appendChild(priceEl);
        bottomWrapEl.appendChild(document.createElement("br"));
        bottomWrapEl.appendChild(buttonWrapEl);

        buttonDiv.addEventListener("click", () => {
            this.handleStartClick(id)
        });
        button2Div.addEventListener("click", () => {
            this.handleEndClick(id)
        });
        infoSplitEl.appendChild(featuresEl);
        infoSplitEl.appendChild(infoEl);

        mainEl.appendChild(imgEl);
        mainEl.appendChild(titleEl);
        mainEl.appendChild(infoSplitEl);
        mainEl.appendChild(bottomWrapEl);

        return mainEl;
    }

    handleStartClick(id) {
        this.points[0] = id;

        if (!this.points.includes(-1)) {
            this.path = this.getPath(this.points[0], this.points[1]).reverse();
            this.render();
        }
        this.refreshRecap();

    }

    handleEndClick(id) {
        this.points[1] = id;

        if (!this.points.includes(-1)) {
            this.path = this.getPath(this.points[0], this.points[1]).reverse();
            this.render();
        }
        this.refreshRecap();
    }

    handleClick(id) {
        //this.switchInfo(this.grid[id].info);
        this.showInfo(id);
        console.log("clicked node with id:", id);
    }

    showInfo(id) {
        let newElement = this.convertToHTML(this.grid[id].info, id);
        this.info.replaceWith(newElement);
        this.info = newElement;
    }

    render() {
        this.renderNodes();
        this.renderAttachments();
    }

    renderNodes() {
        let root = this.nodeContainerEl;
        root.innerHTML = "";
        for (let i = 0; i < this.grid.length; i++) {
            let size = this.grid[i].size;
            let elem = document.createElement("div");

            if (this.path.includes(i)) {
                elem.style.backgroundColor = "green";
            } else {
                elem.style.backgroundColor = "red";
            }

            elem.className = "node";
            /*
            elem.style.width = size + "px";
            elem.style.height = size + "px";
            */
            elem.id = "node_" + i;

            //Posisjonering
            elem.style.top = this.grid[i].y / this.canvas.height * 100 - size / (7 * 2) + "%";
            elem.style.left = this.grid[i].x / this.canvas.width * 100 - size / (7.2 * 2) + "%";

            elem.addEventListener("click", () => {
                this.handleClick(i)
            });
            root.appendChild(elem);

        }
    }

    renderAttachments() {
        let ctx = document.querySelector("canvas").getContext('2d');

        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        ctx.beginPath();
        ctx.lineWidth = 2
        ctx.strokeStyle = "black";
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].attachments.length; j++) {
                let to = this.grid[this.grid[i].attachments[j].nodeId];
                ctx.fillStyle = "black";
                ctx.moveTo(this.grid[i].x, this.grid[i].y);
                ctx.lineTo(to.x, to.y);

            }
        }
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = 3
        ctx.strokeStyle = "green";
        for (let i = 1; i < this.path.length; i++) {

            let startX = this.grid[this.path[i]].x;
            let startY = this.grid[this.path[i]].y;
            let endX = this.grid[this.path[i - 1]].x;
            let endY = this.grid[this.path[i - 1]].y;
            ctx.fillStyle = "green";
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);

        }
        ctx.stroke();
    }
}

class DGrid {
    constructor(grid, origin) {
        this.initialGrid = grid;
        this.dGrid = [];
        this.copy();
        this.setOrigin(origin);
        //this.render();
    }

    copy() {
        for (let i = 0; i < this.initialGrid.length; i++) {
            let dNode = new DNode(this.initialGrid[i].x, this.initialGrid[i].y);
            this.dGrid.push(dNode);
        }
        for (let i = 0; i < this.initialGrid.length; i++) {
            for (let j = 0; j < this.initialGrid[i].attachments.length; j++) {
                this.attach(i, this.initialGrid[i].attachments[j].nodeId, this.initialGrid[i].attachments[j].distance);

            }
        }
    }

    attach(id1, id2, dist) {
        //Sjekker om tilknytningen allerede finnes
        for (let i = 0; i < this.dGrid[id1].attachments.length; i++) {
            if (this.dGrid[id1].attachments[i].id == id2) {
                return false;
            }
        }

        for (let i = 0; i < this.dGrid[id2].attachments.length; i++) {
            if (this.dGrid[id2].attachments[i].id == id2) {
                return false;
            }
        }


        if (typeof (dist) == "undefined") {
            //beregner distansen
            let id1x = this.grid[id1].x;
            let id1y = this.grid[id1].y;
            let id2x = this.grid[id2].x;
            let id2y = this.grid[id2].y;
            let dist = Math.sqrt(Math.pow((id1x - id2x), 2) + Math.pow((id1y - id2y), 2));


            this.dGrid[id1].addAttachment(id2, dist);
            this.dGrid[id2].addAttachment(id1, dist);
            return true;
        }

        this.dGrid[id1].addAttachment(id2, dist);
        this.dGrid[id2].addAttachment(id1, dist);
    }

    setOrigin(id) {
        this.dGrid[id].distanceFromOrigin = 0;
        this.dGrid[id].shortestOrigin = "origin";
        this.check(id, id);
    }

    check(origin) {
        let currentNode = this.dGrid[origin];
        for (let i = 0; i < currentNode.attachments.length; i++) {
            if (!(currentNode.attachments[i].visited)) {
                this.visit(origin, currentNode.attachments[i].id, currentNode.attachments[i].distance);
                currentNode.visited = true;
            }
        }
    }

    visit(originId, targetId, dist) {
        let total = this.dGrid[originId].distanceFromOrigin + dist;
        if (this.dGrid[targetId].distanceFromOrigin > total) {
            this.dGrid[targetId].setDistance(total);
            this.dGrid[targetId].shortestOrigin = originId;
            this.check(targetId);
        }
    }

    chooseOrigin(id) {
        this.dGrid[id].distanceFromOrigin = 0;
    }

}

class DNode {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.attachments = [];
        this.distanceFromOrigin = Infinity;
        this.shortestOrigin = "";
    }

    addAttachment(id, dist) {
        this.attachments.push(new DAttachment(id, dist, false));
    }

    setDistance(dist) {
        if (this.distanceFromOrigin < dist) {
            console.log("AAAAAAAAAAAAA");
            return false;
        }
        this.distanceFromOrigin = dist;
    }
}

class DAttachment {
    constructor(id, distance, visited) {
        //TODO: Fjern visited fra alle steder i koden
        this.id = id;
        this.distance = distance;
        this.visited = visited;
    }
}

const nodeContainerEl = document.querySelector("#nodeContainer");
const canvas = document.querySelector("canvas");
const info = document.querySelector("#info");
const recap = document.querySelector("#recap");
var grid = new Grid(nodeContainerEl, canvas, info, recap);


function load(hutts, grid) {
    for (let i = 0; i < hutts.length; i++) {
        grid.addNode(hutts[i].x, hutts[i].y, hutts[i].info);
    }
    for (let i = 0; i < hutts.length; i++) {
        for (let j = 0; j < hutts[i].attachments.length; j++) {
            grid.attach(hutts[i].id, hutts[i].attachments[j]);
        }

    }
    grid.render();
}

load(hytter, grid);