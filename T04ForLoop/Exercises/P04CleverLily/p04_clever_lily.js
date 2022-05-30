function cleverLily(input) {
    const age = Number(input[0]);
    const priceOfWashingMachine = Number(input[1]);
    const priceOfToy = Number(input[2]);

    let moneyForNextBirthday = 10;
    let totalMoneyReceived = 0;

    for (numberOfBirthday = 1; numberOfBirthday <= age; numberOfBirthday++) {
        if (numberOfBirthday % 2 == 0) {
            totalMoneyReceived += moneyForNextBirthday - 1;
            moneyForNextBirthday += 10;
        } else {
            totalMoneyReceived += priceOfToy;
        }
    }

    const moneyDifference = Math.abs(priceOfWashingMachine - totalMoneyReceived);

    if (totalMoneyReceived >= priceOfWashingMachine) {
        console.log(`Yes! ${moneyDifference.toFixed(2)}`);
    } else {
        console.log(`No! ${moneyDifference.toFixed(2)}`);
    }

}

cleverLily(["10", "170.00", "6"]);
console.log("-------------------------");
cleverLily(["21", "1570.98", "3"]);