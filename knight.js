// import { getValidMoves, Queue } from "./utils.js"

knightMoves([3,3], [4,3]);

function knightMoves(start, target) {
    // first we take the start point and put it in the queue
    start = new Move(start);
    let queue = new Queue();
    queue.enqueue(start);

    // get a set to track the visited
    let visited = new Set();
    visited.add(start.pos);

    // now we do a BFS using level order traversal
    // while queue is non-empty
    let currentSquare = start;
    while (!queue.isEmpty()) {
        // dequeue to get a square
        currentSquare = queue.dequeue();
        
        // if this is the target, stop
        if (currentSquare.pos[0] == target[0] && currentSquare.pos[1] == target[1]) break;
        
        // get all valid moves for this square
        const validMoves = getValidMoves(currentSquare);

        validMoves.forEach(move => {
            // for each valid move
            
            if (move != null) {
                
                // check this position has been visited
                let moveIsVisited = false;
                visited.forEach(visitedMove => {
                    if (move.pos[0] === visitedMove[0] && move.pos[1] === visitedMove[1]) {
                        moveIsVisited = true;
                        return;
                    }
                });

                // if position is not visited
                if (!moveIsVisited) {
                    // enqueue it
                    // add to visited
                    queue.enqueue(move);
                    visited.add(move.pos);
                }
            }
        });   
    }

    let path = [];
    // trace the path back
    // currentSquare now has the target pos
    // until we reach the start pos
    // we go to the current prev

    // while (currentSquare.pos[0] != start.pos[0] && currentSquare.pos[1] != start.pos[1]) {

    //     // find that visited square with pos == current previous

    //     visited.forEach(move => {
            
    //     });

    // }

    console.log(visited);
    console.log(currentSquare);
}

