function flowers(input) {
    const quantityOfChrysanthemums = Number(input[0]);
    const quantityOfRoses = Number(input[1]);
    const quantityOfTulips = Number(input[2]);
    const season = input[3];
    const isHoliday = input[4] === "Y";

    let priceOfFlowers = 0;

    switch (season) {
        case "Spring":
        case "Summer":
            priceOfFlowers = quantityOfChrysanthemums * 2 + quantityOfRoses * 4.10 + quantityOfTulips * 2.5;
            break;
        case "Autumn":
        case "Winter":
            priceOfFlowers = quantityOfChrysanthemums * 3.75 + quantityOfRoses * 4.5 + quantityOfTulips * 4.15;
            break;
    }
    if (isHoliday) {
        priceOfFlowers *= 1.15;
    }

    if (quantityOfTulips > 7 && season === "Spring") {
        priceOfFlowers *= 0.95;
    }

    if (quantityOfRoses >= 10 && season === "Winter") {
        priceOfFlowers *= 0.90;
    }

    if (quantityOfChrysanthemums + quantityOfRoses + quantityOfTulips > 20) {
        priceOfFlowers *= 0.80;
    }

    priceOfFlowers += 2;

    console.log(priceOfFlowers.toFixed(2));
}

flowers(["2", "4", "8", "Spring", "Y"]);
flowers(["3", "10", "9", "Winter", "N"]);
flowers(["10", "10", "10", "Autumn", "N"]);