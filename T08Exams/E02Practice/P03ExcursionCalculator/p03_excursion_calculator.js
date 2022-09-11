function excursionCalculator(input) {
    const countPeople = Number(input[0]);
    const season = input[1];

    let totalPrice = 0;

    switch (season) {
        case "spring":
            if (countPeople <= 5) {
                totalPrice = 50;
            } else {
                totalPrice = 48;
            }
            totalPrice *= countPeople;
            break;
        case "summer":
            if (countPeople <= 5) {
                totalPrice = 48.5;
            } else {
                totalPrice = 45;
            }
            totalPrice *= countPeople;
            totalPrice *= 0.85;
            break;
        case "autumn":
            if (countPeople <= 5) {
                totalPrice = 60;
            } else {
                totalPrice = 49.50;
            }
            totalPrice *= countPeople;
            break;
        case "winter":
            if (countPeople <= 5) {
                totalPrice = 86;
            } else {
                totalPrice = 85;
            }
            totalPrice *= countPeople;
            totalPrice *= 1.08;
            break;
    }
    console.log(`${totalPrice.toFixed(2)} leva.`);
}

excursionCalculator(["5", "spring"]);
console.log("-------------------------");
excursionCalculator(["10", "summer"]);
console.log("-------------------------");
excursionCalculator(["15", "autumn"]);
console.log("-------------------------");
excursionCalculator(["20", "winter"]);
