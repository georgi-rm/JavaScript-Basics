function weddingSeats(input) {
    const countSectors = input[0].charCodeAt(0) - "A".charCodeAt(0) + 1;
    const countOfRowsInFirstSector = Number(input[1]);
    const countOfSeatsOnOddRow = Number(input[2]);

    let countOfRowsOnCurrentSector = countOfRowsInFirstSector;
    let countOfAllSeats = 0;

    for (let sectorNumber = 0; sectorNumber < countSectors; sectorNumber++) {
        for (let row = 1; row <= countOfRowsOnCurrentSector; row++) {
            let countOfSeatsOnCurrentRow = countOfSeatsOnOddRow;

            if (row % 2 == 0) {
                countOfSeatsOnCurrentRow += 2;
            }

            for (let seat = 0; seat < countOfSeatsOnCurrentRow; seat++) {
                countOfAllSeats++;
                console.log(`${String.fromCharCode("A".charCodeAt(0) + sectorNumber)}${row}${String.fromCharCode("a".charCodeAt(0) + seat)}`)
            }
        }
        countOfRowsOnCurrentSector++;
    }

    console.log(countOfAllSeats);
}

weddingSeats(["B", "3", "2"]);
console.log("-------------------------");
weddingSeats(["C", "4", "2"]);