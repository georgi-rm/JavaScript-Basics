function bikeRace(input) {
    const numberOfJuniorRiders = Number(input[0]);
    const numberOfSeniorRiders = Number(input[1]);
    const typeOfRace = input[2];

    let taxForJunior = 0;
    let taxForSenior = 0;

    switch (typeOfRace) {
        case "trail":
            taxForJunior = 5.50;
            taxForSenior = 7;
            break;
        case "cross-country":
            taxForJunior = 8;
            taxForSenior = 9.50;
            break;
        case "downhill":
            taxForJunior = 12.25;
            taxForSenior = 13.75;
            break;
        case "road":
            taxForJunior = 20;
            taxForSenior = 21.50;
            break;
    }
    let moneyFromTaxes = numberOfJuniorRiders * taxForJunior + numberOfSeniorRiders * taxForSenior;

    if (typeOfRace === "cross-country" && (numberOfJuniorRiders + numberOfSeniorRiders >= 50)) {
        moneyFromTaxes *= 0.75;
    }

    moneyFromTaxes *= 0.95;
    console.log(moneyFromTaxes.toFixed(2));
}

bikeRace(["10", "20", "trail"]);
bikeRace(["21", "26", "cross-country"]);
bikeRace(["30", "25", "cross-country"]);
bikeRace(["10", "10", "downhill"]);
bikeRace(["3", "40", "road"]);