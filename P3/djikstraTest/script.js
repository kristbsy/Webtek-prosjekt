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
        this.points = [];
        this.path = [];
    }

    generateRecapInstanceHTML(id) {
        let main = document.createElement("div");
        let imgEl = document.createElement("img");
        let outerEl = document.createElement("div");
        let nameEl = document.createElement("div");
        let daysToStayEl = document.createElement("div");
        let inputEl = document.createElement("input");

        main.className = "recapInstance";
        nameEl.className = "hytteNavn";
        daysToStayEl.className = "daysToStay";

        imgEl.src = this.grid[id].info.img;
        nameEl.innerHTML = this.grid[id].info.name;

        inputEl.type = "number";
        inputEl.name = "inputElNr_" + id;
        inputEl.id = "inputElNr_" + id;
        inputEl.max = "7";
        inputEl.min = "0";
        inputEl.value = "1";

        daysToStayEl.innerHTML = "Dager å bli: ";
        daysToStayEl.appendChild(inputEl);

        outerEl.appendChild(nameEl);
        outerEl.appendChild(document.createElement("br"));
        outerEl.appendChild(daysToStayEl);

        main.appendChild(imgEl);
        main.appendChild(outerEl);
        return main;
    }

    refreshRecap() {
        let elements = [];
        this.points.forEach(el => { elements.push(this.generateRecapInstanceHTML(el)) });
        this.recap.innerHTML = "<h2>Den gjeldende turen</h2>";
        elements.forEach(el => { this.recap.appendChild(el) });
    }



    initDjikstra(id) {
        this.grid[id].dGrid = new DGrid(this.grid, id);
    }

    getPath(fromId, toId) {
        if (this.grid[fromId].dGrid.length === 0) {
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
        // console.log(this.grid[id1].attachments);
        this.grid[id1].attachments.forEach(attachment => {
            if (!isDuplicate) {
                console.log(attachment.nodeId, id2);
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
        let infoSplitEl = document.createElement("div");
        let buttonWrapEl = document.createElement("div");
        let priceEl = document.createElement("div");

        mainEl.id = "info";
        buttonWrapEl.id = "buttonWrap";
        infoSplitEl.id = "infoSplit";
        featuresEl.id = "infoFeatures";
        infoEl.id = "infoText";

        buttonDiv.className = "button";
        priceEl.style.marginLeft = "10px";
        titleEl.style.height = "24px";

        priceEl.innerHTML = "Pris per dag: " + info.price + "nok";
        titleEl.innerText = info.name;

        infoEl.innerText = info.text;
        featuresEl.innerHTML = info.features;
        buttonDiv.innerText = "LEGG TIL";
        imgEl.src = info.img;

        buttonWrapEl.appendChild(priceEl);
        buttonWrapEl.appendChild(document.createElement("br"));
        buttonWrapEl.appendChild(buttonDiv);

        buttonDiv.addEventListener("click", () => { this.handleButtonClick(id) });

        infoSplitEl.appendChild(featuresEl);
        infoSplitEl.appendChild(infoEl);

        mainEl.appendChild(imgEl);
        mainEl.appendChild(titleEl);
        mainEl.appendChild(infoSplitEl);
        mainEl.appendChild(buttonWrapEl);

        return mainEl;
    }

    handleButtonClick(id) {
        this.points.push(id);
        this.refreshRecap();
        if (this.points.length === 2) {
            this.path = this.getPath(this.points[0], this.points[1]).reverse();
        }
        this.render();

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
            elem.style.width = size + "px";
            elem.style.height = size + "px";
            elem.id = "node_" + i;

            //Posisjonering
            elem.style.top = this.grid[i].y / 7 - size / (7 * 2) + "%";
            elem.style.left = this.grid[i].x / 7.2 - size / (7.2 * 2) + "%";

            elem.addEventListener("click", () => { this.handleClick(i) });
            root.appendChild(elem);

        }
    }

    renderAttachments() {
        let ctx = document.querySelector("canvas").getContext('2d');
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].attachments.length; j++) {
                let to = this.grid[this.grid[i].attachments[j].nodeId];
                ctx.moveTo(this.grid[i].x, this.grid[i].y);
                ctx.lineTo(to.x, to.y);
                ctx.stroke();
            }
        }
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

const nodeContainerEl = document.querySelector("#container");
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

