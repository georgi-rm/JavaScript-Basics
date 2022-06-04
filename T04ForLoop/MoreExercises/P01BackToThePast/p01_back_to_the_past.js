function backToThePast(input) {
    const availableMoney = Number(input[0]);
    const yearToLive = Number(input[1]);

    let age = 18;

    let moneyToSpent = 0;

    for (year = 1800; year <= yearToLive; year++) {
        moneyToSpent += 12000;

        if (year % 2 != 0) {
            moneyToSpent += age * 50;
        }

        age++;
    }

    const moneyDifference = Math.abs(availableMoney - moneyToSpent);

    if (moneyToSpent <= availableMoney) {
        console.log(`Yes! He will live a carefree life and will have ${moneyDifference.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${moneyDifference.toFixed(2)} dollars to survive.`);
    }
}

backToThePast(["50000", "1802"]);
console.log("-------------------------");
backToThePast(["100000.15", "1808"]);