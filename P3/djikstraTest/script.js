class Attachment {
    constructor(id, distance) {
        this.nodeId = id;
        this.distance = distance;
    }
}

class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.attachments = [];
    }

    addAttachment(id, dist) {
        this.attachments.push(new Attachment(id, dist));
    }
}

class Grid {
    constructor() {
        this.grid = [];
    }

    addNode(x, y) {
        this.grid.push(new Node(x, y));
        return this.grid.length - 1;
    }

    attach(id1, id2, dist) {
        if (typeof (dist) == "undefined") {
            let id1x = this.grid[id1].x;
            let id1y = this.grid[id1].y;
            let id2x = this.grid[id2].x;
            let id2y = this.grid[id2].y;

            let dist = Math.sqrt(Math.pow((id1x - id2x), 2) + Math.pow((id1y - id2y), 2));
            console.log(dist)
            this.grid[id1].addAttachment(id2, dist);
            this.grid[id2].addAttachment(id1, dist);
            return true;
        }

        this.grid[id1].addAttachment(id2, dist);
        this.grid[id2].addAttachment(id1, dist);
    }
}

class DGrid {
    constructor(grid) {
        this.initialGrid = grid.grid;
        this.dGrid = [];
        this.copy();
    }

    render() {
        document.body.innerHTML = "";
        for (let i = 0; i < this.dGrid.length; i++) {
            console.log("test");
            let elem = document.createElement("div");
            elem.className = "node";
            let elemInner = document.createElement("div");
            elem.style.top = this.dGrid[i].y + "px";
            elem.style.left = this.dGrid[i].x + "px";
            elemInner.innerHTML = "id: " + i;
            elemInner.innerHTML += "<br>";
            elemInner.innerHTML += "od: " + this.dGrid[i].distanceFromOrigin;
            elemInner.innerHTML += "<br>x: " + this.dGrid[i].x + ", y: " + this.dGrid[i].y;
            elem.appendChild(elemInner);
            document.body.appendChild(elem);
        }
        this.renderAttachments();
    }

    renderAttachments() {
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

                let dx = Math.abs(currentNode.x - destNodeX);
                let dy = Math.abs(currentNode.y - destNodeY);
                let cx = getSmallest(currentNode.x, destNodeX) + dx / 2;
                let cy = getSmallest(currentNode.y, destNodeY) + dy / 2;

                console.log(this.dGrid[currentNode.attachments[j].id].x);

                elem.style.width = length + "px";

                let rotation = -Math.acos(dx / length) / (2 * Math.PI) * 360;

                // elem.style.transform = "rotate(" + rotation + "deg)";
                //elem.style.marginLeft = dx / 2;
                //elem.style.marginTop = dy / 2;

                elem.style.left = currentNode.x + 25 + (length / 2 * Math.cos(rotation / 360 * 2 * Math.PI)) + "px";
                elem.style.top = currentNode.y + 25 + "px";
                elem.style.transform = "rotate(" + rotation + "deg)";

                elem.className = "line";

                document.body.appendChild(elem);
                console.log("Origin:", i, "Tilknytning:", currentNode.attachments[j], "element:", elem);
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
        this.dGrid[id].shortestOrigin = id;
        this.check(id, id);
        this.render();
    }

    check(origin, nodeId) {
        let currentNode = this.dGrid[nodeId];
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
        this.id = id;
        this.distance = distance;
        this.visited = visited;
    }
}

var grid = new Grid;
grid.attach(grid.addNode(134, 523), grid.addNode(200, 100));
grid.attach(grid.addNode(421, 253), grid.addNode(224, 575));
grid.attach(1, 3);
var djGrid = new DGrid(grid);
djGrid.setOrigin(0);