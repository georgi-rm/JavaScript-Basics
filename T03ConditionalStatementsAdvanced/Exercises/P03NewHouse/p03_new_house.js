function newHouse(input) {
    const typeOfFlowers = input[0];
    const quantityOfFlowers = Number(input[1]);
    const budget = Number(input[2]);

    let price = 0;
    let discountMultiplier = 1;

    switch (typeOfFlowers) {
        case "Roses":
            price = 5;
            if (quantityOfFlowers > 80) {
                discountMultiplier = 0.9;
            }
            break;
        case "Dahlias":
            price = 3.80;
            if (quantityOfFlowers > 90) {
                discountMultiplier = 0.85;
            }
            break;
        case "Tulips":
            price = 2.80;
            if (quantityOfFlowers > 80) {
                discountMultiplier = 0.85;
            }
            break;
        case "Narcissus":
            price = 3;
            if (quantityOfFlowers < 120) {
                discountMultiplier = 1.15;
            }
            break;
        case "Gladiolus":
            price = 2.50;
            if (quantityOfFlowers < 80) {
                discountMultiplier = 1.20;
            }
            break;
    }

    const total = price * quantityOfFlowers * discountMultiplier;
    const sumDifference = budget - total;

    if (sumDifference >= 0) {
        console.log(`Hey, you have a great garden with ${quantityOfFlowers} ${typeOfFlowers} and ${sumDifference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${Math.abs(sumDifference).toFixed(2)} leva more.`);
    }
}

newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);
newHouse(["Narcissus", "119", "360"]);