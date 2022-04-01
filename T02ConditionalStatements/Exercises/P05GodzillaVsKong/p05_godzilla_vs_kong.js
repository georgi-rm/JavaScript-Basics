function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let numberOfPeople = Number(input[1]);
    let pricePerPerson = Number(input[2]);

    let priceOfDecore = 0.1 * budget;

    let totalPriceOfCloths = numberOfPeople * pricePerPerson;
    if (numberOfPeople > 150) {
        totalPriceOfCloths *= 0.9;
    }

    let moneyDifference = budget - totalPriceOfCloths - priceOfDecore;
    
    if (moneyDifference >= 0) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyDifference.toFixed(2)} leva left.`);
    } else {
        moneyDifference = Math.abs(moneyDifference);
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyDifference.toFixed(2)} leva more.`)
    }
}

godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["15437.62","186","57.99"]);
godzillaVsKong(["9587.88","222","55.68"])
