function cake(input) {
    const cakeWidth = Number(input[0]);
    const cakeLength = Number(input[1]);

    const totalPieces = cakeWidth * cakeLength;
    let piecesTaken = 0;
    let isCakeEaten = false;
    let index = 2;

    let command = input[index++];

    while (command !== "STOP") {
        piecesTaken += Number(command);
        if (piecesTaken >= totalPieces) {
            isCakeEaten = true;
            break;
        }
        command = input[index++];
    }

    const piecesDifference = Math.abs(totalPieces - piecesTaken);

    if (isCakeEaten) {
        console.log(`No more cake left! You need ${piecesDifference} pieces more.`);
    } else {
        console.log(`${piecesDifference} pieces are left.`);
    }
}

cake(["10", "10", "20", "20", "20", "20", "21"]);
console.log("-------------------------");
cake(["10", "2", "2", "4", "6", "STOP"]);