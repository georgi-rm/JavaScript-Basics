function vacation(input) {
    const budget = Number(input[0]);
    const isSummer = input[1] === "Summer";

    let location = "";
    let accommodation = "";
    let price = 0;

    if (budget <= 1000) {
        accommodation = "Camp";
        if (isSummer) {
            price = 0.65 * budget;
        } else {
            price = 0.45 * budget;
        }
    } else if (budget <= 3000) {
        accommodation = "Hut";
        if (isSummer) {
            price = 0.80 * budget;
        } else {
            price = 0.60 * budget;
        }
    } else {
        accommodation = "Hotel";
        price = 0.90 * budget;
    }

    if (isSummer) {
        location = "Alaska";
    } else {
        location = "Morocco";
    }

    console.log(`${location} - ${accommodation} - ${price.toFixed(2)}`);
}

vacation(["800", "Summer"]);
console.log("-------------------------");
vacation(["799.50", "Winter"]);
console.log("-------------------------");
vacation(["1100", "Summer"]);
console.log("-------------------------");
vacation(["2543.99", "Winter"]);
console.log("-------------------------");
vacation(["3460", "Summer"]);
console.log("-------------------------");
vacation(["5000", "Winter"]);
console.log("-------------------------");