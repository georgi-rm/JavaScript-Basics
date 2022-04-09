function harvest(input) {
    const fieldArea = Number(input[0]);
    const grapeForOneSquareMeter = Number(input[1]);
    const requiredWine = Number(input[2]);
    const workers = Number(input[3]);

    const grapeForWine = fieldArea * grapeForOneSquareMeter * 0.40;
    const wineProduced = grapeForWine / 2.5;

    const wineDifference = Math.abs(requiredWine - wineProduced);

    if (wineProduced < requiredWine) {
        console.log(`It will be a tough winter! More ${Math.floor(wineDifference)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineProduced)} liters.`);
        console.log(`${Math.ceil(wineDifference)} liters left -> ${Math.ceil(wineDifference / workers)} liters per person.`);
    }
}

harvest([650, 2, 175, 3]);

harvest([1020, 1.5, 425, 4]);
