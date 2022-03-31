function toyShop(input) {
    let priceOfExcursion = Number(input[0]);
    let numberOfPuzzels = Number(input[1]);
    let numberOfDolls = Number(input[2]);
    let numberOfBears = Number(input[3]);
    let numberOfMinions = Number(input[4]);
    let numberOfTrucks = Number(input[5]);

    let totalNumberOfToys = numberOfPuzzels + numberOfDolls + numberOfBears
        + numberOfMinions + numberOfTrucks;
    
    let earnedMoney = numberOfPuzzels * 2.60 +
        numberOfDolls * 3 + numberOfBears * 4.10 +
        numberOfMinions * 8.20 + numberOfTrucks * 2;
    
    if (totalNumberOfToys >= 50) {
        earnedMoney = earnedMoney * 0.75;
    }

    earnedMoney = earnedMoney * 0.90;

    let moneyDifference = earnedMoney - priceOfExcursion;

    let resultMoneyDifference = Math.abs(moneyDifference).toFixed(2);
    if (moneyDifference >= 0) {
        console.log(`Yes! ${resultMoneyDifference} lv left.`)
    } else {
        console.log(`Not enough money! ${resultMoneyDifference} lv needed.`);
    }
}

toyShop(["40.8","20","25","30","50","10"]);

toyShop(["320","8","2","5","5","1"])