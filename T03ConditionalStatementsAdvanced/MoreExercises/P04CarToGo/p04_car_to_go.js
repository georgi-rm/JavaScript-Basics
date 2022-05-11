function carToGo(input) {
    const budget = Number(input[0]);
    const isSummer = input[1] === "Summer";

    let carClass = "";
    let carType = "";
    let carPrice = 0;

    if (budget <= 100) {
        carClass = "Economy class";
        if (isSummer) {
            carType = "Cabrio";
            carPrice = 0.35 * budget;
        } else {
            carType = "Jeep";
            carPrice = 0.65 * budget;
        }
    } else if (budget <= 500) {
        carClass = "Compact class";
        if (isSummer) {
            carType = "Cabrio";
            carPrice = 0.45 * budget;
        } else {
            carType = "Jeep";
            carPrice = 0.80 * budget;
        }
    } else {
        carClass = "Luxury class";
        carType = "Jeep";
        carPrice = 0.90 * budget;
    }
    console.log(carClass);
    console.log(`${carType} - ${carPrice.toFixed(2)}`);
}

carToGo(["450", "Summer"]);
console.log("-------------------------");
carToGo(["450", "Winter"]);
console.log("-------------------------");
carToGo(["99.99", "Summer"]);
console.log("-------------------------");
carToGo(["70.50", "Winter"]);
console.log("-------------------------");
carToGo(["1010", "Summer"]);
console.log("-------------------------");
carToGo(["1010", "Winter"]);