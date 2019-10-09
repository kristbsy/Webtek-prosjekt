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

var grid = new Grid;
grid.attach(grid.addNode(134, 523), grid.addNode(200, 100));