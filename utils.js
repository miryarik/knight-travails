class Queue {
    #list;

    constructor() {
        this.#list = [];
    }

    enqueue(node) {
        this.#list.push(node);
    }

    dequeue() {
        return this.#list.shift();
    }

    isEmpty() {
        if (this.#list.length == 0) return true;
        else return false;
    }
}

class Move {
    constructor([x, y]) {
        this.pos = [x, y];
        this.previous = null;
    }
}

function getValidMoves(startMove) {
    // get all 8 permutations

    const [x, y] = startMove.pos;

    let moves = [
        [x + 1, y + 2],
        [x - 1, y + 2],
        [x + 1, y - 2],
        [x - 1, y - 2],
        [x + 2, y + 1],
        [x - 2, y + 1],
        [x + 2, y - 1],
        [x - 2, y - 1],
    ].filter((move) => {
        // filter out those that go out of the board
        if (move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <= 7) {
            return true;
        }
    }).map((move) => {
        // make valid move into a Move object with [x, y] as previous
        const moveObj = new Move(move);
        moveObj.previous = startMove;
        return moveObj;
    });

    return moves;
}

// let moves = getValidMoves([0, 0]);
// console.log(moves);
