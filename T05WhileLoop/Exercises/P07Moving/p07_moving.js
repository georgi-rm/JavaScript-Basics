function moving(input) {
    let index = 0;
    const freeSpaceWidth = Number(input[index++]);
    const freeSpaceLength = Number(input[index++]);
    const freeSpaceHeight = Number(input[index++]);

    const volumeOfFreeSpace = freeSpaceWidth * freeSpaceLength * freeSpaceHeight;
    let totalBoxes = 0;
    let isFull = false;

    let command = input[index++];

    while (command !== "Done") {
        totalBoxes += Number(command);
        if (totalBoxes >= volumeOfFreeSpace) {
            isFull = true;
            break;
        }
        command = input[index++];
    }

    const piecesDifference = Math.abs(volumeOfFreeSpace - totalBoxes);

    if (isFull) {
        console.log(`No more free space! You need ${piecesDifference} Cubic meters more.`);
    } else {
        console.log(`${piecesDifference} Cubic meters left.`);
    }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
console.log("-------------------------");
moving(["10", "1", "2", "4", "6", "Done"]);