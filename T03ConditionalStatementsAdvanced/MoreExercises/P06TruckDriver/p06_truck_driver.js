function truckDriver(input) {
    const season = input[0];
    const kilometersPerMonth = Number(input[1]);

    let pricePerKm = 0;

    if (kilometersPerMonth <= 5000) {
        switch (season) {
            case "Spring":
            case "Autumn":
                pricePerKm = 0.75;
                break;
            case "Summer":
                pricePerKm = 0.90;
                break;
            case "Winter":
                pricePerKm = 1.05;
                break;
        }
    } else if (kilometersPerMonth <= 10000) {
        switch (season) {
            case "Spring":
            case "Autumn":
                pricePerKm = 0.95;
                break;
            case "Summer":
                pricePerKm = 1.10;
                break;
            case "Winter":
                pricePerKm = 1.25;
                break;
        }
    } else {
        pricePerKm = 1.45;
    }

    const salary = (kilometersPerMonth * pricePerKm * 4) * 0.90;
    console.log(salary.toFixed(2));
}

truckDriver(["Summer", "3455"]);
console.log("-------------------------");
truckDriver(["Winter", "4350"]);
console.log("-------------------------");
truckDriver(["Winter", "5678"]);
console.log("-------------------------");
truckDriver(["Winter", "16042"]);
console.log("-------------------------");
truckDriver(["Spring", "1600"]);
console.log("-------------------------");
truckDriver(["Autumn", "8600"]);
console.log("-------------------------");
truckDriver(["Spring", "16942"]);
console.log("-------------------------");