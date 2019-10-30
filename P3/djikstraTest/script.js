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
    }

    addNode(x, y, info) {
        this.grid.push(new Node(x, y, info));
        //this.render()
        return this.grid.length - 1;
    }

    attach(id1, id2, dist) {
        if (typeof (dist) == "undefined") {
            let id1x = this.grid[id1].x;
            let id1y = this.grid[id1].y;
            let id2x = this.grid[id2].x;
            let id2y = this.grid[id2].y;

            let dist = Math.sqrt(Math.pow((id1x - id2x), 2) + Math.pow((id1y - id2y), 2));
            this.grid[id1].addAttachment(id2, dist);
            this.grid[id2].addAttachment(id1, dist);
            return true;
        }
        if (this.grid[id1])
            this.grid[id1].addAttachment(id2, dist);
        this.grid[id2].addAttachment(id1, dist);
    }

    convertToHTML(info) {
        console.log("changing");
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

        infoSplitEl.appendChild(featuresEl);
        infoSplitEl.appendChild(infoEl);

        mainEl.appendChild(imgEl);
        mainEl.appendChild(titleEl);
        mainEl.appendChild(infoSplitEl);
        mainEl.appendChild(buttonWrapEl);

        return mainEl;
    }

    handleClick(id) {
        //this.switchInfo(this.grid[id].info);
        this.showInfo(id);
        console.log("clicked node with id:", id);
    }

    showInfo(id) {
        let newElement = this.convertToHTML(this.grid[id].info);
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

            elem.className = "node";
            elem.style.width = size + "px";
            elem.style.height = size + "px";
            elem.id = "node_" + i;

            //Posisjonering
            //console.log(this.grid[i].y / 700, size / 1400);
            elem.style.top = this.grid[i].y / 7 - size / (7 * 2) + "%";
            elem.style.left = this.grid[i].x / 7.2 - size / (7.2 * 2) + "%";

            elem.addEventListener("click", () => { this.handleClick(i) });
            root.appendChild(elem);

        }
    }

    renderAttachments() {
        let ctx = document.querySelector("canvas").getContext('2d');
        console.log(ctx);
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].attachments.length; j++) {
                let to = this.grid[this.grid[i].attachments[j].nodeId];
                ctx.moveTo(this.grid[i].x, this.grid[i].y);
                //console.log(to);
                ctx.lineTo(to.x, to.y);
                ctx.stroke();
                //console.log(this.grid[i].attachments[j]);
            }
        }
        console.log("dun");
    }
}

class DGrid {
    constructor(grid) {
        this.initialGrid = grid.grid;
        this.dGrid = [];
        this.copy();
        //this.render();
    }

    renderNodes(root) {
        //TODO: flytt den til Grid, istedenfor DGrid
        /*let root = document.querySelector("#container");*/
        root.innerHTML = "";
        for (let i = 0; i < this.dGrid.length; i++) {
            let elem = document.createElement("div");
            elem.className = "node";
            let elemInner = document.createElement("div");
            elem.style.top = this.dGrid[i].y + "px";
            elem.style.left = this.dGrid[i].x + "px";
            elemInner.innerHTML = "id: " + i;
            elemInner.innerHTML += "<br>";
            elemInner.innerHTML += "od: " + this.dGrid[i].distanceFromOrigin;
            elemInner.innerHTML += "<br>x: " + this.dGrid[i].x + ", y: " + this.dGrid[i].y;

            elem.id = "number" + i;
            elem.setAttribute('number', i);

            elem.addEventListener("click", getPath);

            elem.appendChild(elemInner);
            root.appendChild(elem);
        }
        this.renderAttachments();
    }

    renderAttachments() {
        //TODO: endre funksjonen til å bruke canvas istedenfor
        let root = document.querySelector("#container");


        let getSmallest = function (a, b) {
            if (a < b) {
                return a;
            } else {
                return b;
            }
        }
        for (let i = 0; i < this.dGrid.length; i++) {
            let currentNode = this.dGrid[i];
            for (let j = 0; j < currentNode.attachments.length; j++) {
                let length = currentNode.attachments[j].distance;
                let elem = document.createElement("div");

                let destNodeX = this.dGrid[currentNode.attachments[j].id].x;
                let destNodeY = this.dGrid[currentNode.attachments[j].id].y;

                let dx = currentNode.x - destNodeX;
                let dy = currentNode.y - destNodeY;
                let cx = getSmallest(currentNode.x, destNodeX) + Math.abs(dx) / 2 - length / 2;
                let cy = getSmallest(currentNode.y, destNodeY) + Math.abs(dy) / 2;

                elem.style.width = length + "px";
                elem.id = "path-" + i + "-" + currentNode.attachments[j].id;
                elem.setAttribute("dx", dx);
                elem.setAttribute("dy", dy);
                let rotation = -Math.acos(dx / length);

                elem.style.left = cx + 25 + "px";
                elem.style.top = cy + 25 + "px";

                let innerEl = document.createElement("div");
                innerEl.innerHTML = "Distance: " + Math.round(length);

                innerEl.style.left = getSmallest(currentNode.x, destNodeX) + Math.abs(dx) / 2 + "px";
                innerEl.style.top = cy + "px";


                innerEl.style.position = "absolute";

                root.appendChild(innerEl);

                elem.className = "line";
                if ((dx < 0 && dy < 0) || (dx >= 0 && dy <= 0)) {
                    elem.style.transform = "rotate(" + rotation + "rad)";
                    root.appendChild(elem);
                }

            }
        }
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
        this.render();
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

function getPath(e) {
    //TODO: sett inn i enten Grid eller DGrid
    console.log(e.target.getAttribute('number'));
    let currentId = Number(e.target.getAttribute('number'));
    let path = [];
    console.log(djGrid.dGrid[currentId].shortestOrigin);
    while (djGrid.dGrid[currentId].shortestOrigin != "origin") {
        path.push(currentId);
        currentId = djGrid.dGrid[currentId].shortestOrigin;
    }
    path.push(currentId);
    let corrected = path.reverse();
    console.log(corrected);

    let lines = document.querySelectorAll(".line");
    for (let i = 0; i < lines.length; i++) {
        lines[i].style.border = "2px solid red";
        lines[i].style.zIndex = "0";
    }

    for (let i = 0; i < corrected.length - 1; i++) {
        let first = corrected[i];
        let second = corrected[i + 1];
        try {
            document.querySelector("#path-" + first + "-" + second).style.border = "2px solid blue";
            //document.querySelector("#path-" + first + "-" + second).style.zIndex = "200";
            console.log("success", "#path-" + first + "-" + second);
        } catch (error) {
            document.querySelector("#path-" + second + "-" + first).style.border = "2px solid blue";
            //document.querySelector("#path-" + first + "-" + second).style.zIndex = "200";
            console.log("success", "#path-" + second + "-" + first);
        }

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
            //console.log(hutts[i].id, hutts[i].attachments[j]);
            grid.attach(hutts[i].id, hutts[i].attachments[j]);
        }

    }
    grid.render();
}

load(hytter, grid);

