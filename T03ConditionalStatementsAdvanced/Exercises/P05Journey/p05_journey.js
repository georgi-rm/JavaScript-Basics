function journey(input) {
    const budget = Number(input[0]);
    const season = input[1];

    let typeOfAccomudation = "";
    let destination = "";
    let spentAmount = 0;

    if (budget <= 100) {
        destination = "Bulgaria";

        if (season === "summer") {
            typeOfAccomudation = "Camp";
            spentAmount = 0.3 * budget;
        } else {
            typeOfAccomudation = "Hotel";
            spentAmount = 0.7 * budget;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";

        if (season === "summer") {
            typeOfAccomudation = "Camp";
            spentAmount = 0.4 * budget;
        } else {
            typeOfAccomudation = "Hotel";
            spentAmount = 0.8 * budget;
        }
    } else {
        destination = "Europe";
        typeOfAccomudation = "Hotel";
        spentAmount = 0.9 * budget;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${typeOfAccomudation} - ${spentAmount.toFixed(2)}`);
}

journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);