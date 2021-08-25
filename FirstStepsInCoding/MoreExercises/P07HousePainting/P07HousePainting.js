function HousePainting(input) {
    let sideX = Number(input[0]);
    let sideY = Number(input[1]);
    let heightOfRoof = Number(input[2]);

    let areaOfFrontAndBackSide = sideX * sideX * 2 - 1.2 * 2;
    let areaOfSideWalls = sideX * sideY * 2 - 2 * 1.5 * 1.5;
    let areaOfRoof = sideX * sideY * 2 + sideX * heightOfRoof * 2 / 2;

    let areaOfWalls = areaOfFrontAndBackSide + areaOfSideWalls;

    let litersOfGreenPaint = areaOfWalls / 3.4;
    let litersOfRedPaint = areaOfRoof / 4.3;
    console.log(litersOfGreenPaint.toFixed(2));
    console.log(litersOfRedPaint.toFixed(2));
}

HousePainting(["6", "10", "5.2"])
HousePainting(["10.25", "15.45", "8.88"])