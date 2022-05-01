function fishingBoat(input) {
    const budget = Number(input[0]);
    const season = input[1];
    const countOfFisherman = Number(input[2]);

    let rent = 0;

    switch (season) {
        case "Spring":
            rent = 3000;
            break;
        case "Summer":
        case "Autumn":
            rent = 4200;
            break;
        case "Winter":
            rent = 2600;
            break;
    }

    if (countOfFisherman <= 6) {
        rent *= 0.9;
    } else if (countOfFisherman <= 11) {
        rent *= 0.85;
    } else {
        rent *= 0.75;
    }

    if (countOfFisherman % 2 == 0 && season !== "Autumn") {
        rent *= 0.95;
    }

    const budgetDifference = Math.abs(budget - rent);

    if (budget >= rent) {
        console.log(`Yes! You have ${budgetDifference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${budgetDifference.toFixed(2)} leva.`);
    }
}

fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter", "13"]);