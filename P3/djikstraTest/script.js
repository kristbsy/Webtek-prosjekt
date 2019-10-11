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

    copy() {
        console.log(this.initialGrid);
        for (let i = 0; i < this.initialGrid.length; i++) {
            console.log("test");
            let dNode = new DNode(this.initialGrid[i].x, this.initialGrid[i].y);
            this.dGrid.push(dNode);
        }
        for (let i = 0; i < this.initialGrid.length; i++) {
            console.log("innerTest");
            //let cNode = this.dGrid[i];
            for (let j = 0; j < this.initialGrid[i].attachments.length; j++) {
                console.log(this.initialGrid[i].attachments[j]);
                this.attach(i, this.initialGrid[i].attachments[j].nodeId, this.initialGrid[i].attachments[j].distance);

            }
        }
    }

    attach(id1, id2, dist) {
        //Sjekker om tilknytningen allerede finnes
        console.log(id1, id2);
        console.log(this.dGrid[id1]);
        for (let i = 0; i < this.dGrid[id1].attachments.length; i++) {
            console.log(this.dGrid[id1].attachments[i].nodeId == id2)
            if (this.dGrid[id1].attachments[i].nodeId == id2) {
                console.log("duplisert funnet")
                return false;
            }
        }

        for (let i = 0; i < this.dGrid[id2].attachments.length; i++) {
            if (this.dGrid[id2].attachments[i].nodeId == id2) {
                console.log("duplisert funnet")
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

            console.log(dist)


            this.dGrid[id1].addAttachment(id2, dist);
            this.dGrid[id2].addAttachment(id1, dist);
            return true;
        }

        this.dGrid[id1].addAttachment(id2, dist);
        this.dGrid[id2].addAttachment(id1, dist);
    }

    check(origin, nodeId) {
        let currentNode = this.dGrid[nodeId];
        for (let i = 0; i < currentNode.attachments.length; i++) {
            if (!currentNode[i].visited) {
                this.visit(origin, currentNode.attachments[i].id, currentNode.attachments[i].dist);
                currentNode.visited = true;
            }
        }
    }

    visit(originId, targetId, dist) {
        let total = this.dGrid[originId].distanceFromOrigin + dist;
        if (this.dGrid[targetId].distanceFromOrigin > total) {
            this.dGrid[targetId].setDistance(total);
            this.dGrid.shortestOrigin = originId;
        }
    }

    addNode(x, y) {

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
var djGrid = new DGrid(grid);