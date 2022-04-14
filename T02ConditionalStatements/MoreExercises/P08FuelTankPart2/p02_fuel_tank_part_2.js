function fuelTankPart2(input) {
    const fuelType = input[0];
    const fuelQuantity = Number(input[1]);
    const clubCard = input[2];

    let fuelPrice = 0;

    if (fuelType === "Gasoline") {
        fuelPrice = 2.22;
        if (clubCard === "Yes") {
            fuelPrice -= 0.18;
        }
    } else if (fuelType === "Diesel") {
        fuelPrice = 2.33;
        if (clubCard === "Yes") {
            fuelPrice -= 0.12;
        }
    } else if (fuelType === "Gas") {
        fuelPrice = 0.93;
        if (clubCard === "Yes") {
            fuelPrice -= 0.08;
        }
    }

    let total = fuelPrice * fuelQuantity;

    if (fuelQuantity > 25) {
        total *= 0.90;
    } else if (fuelQuantity >= 20) {
        total *= 0.92;
    }
    console.log(`${total.toFixed(2)} lv.`);
}

fuelTankPart2(["Gas", 30, "Yes"]);
fuelTankPart2(["Gasoline", 25, "No"]);
fuelTankPart2(["Diesel", 19, "No"]);