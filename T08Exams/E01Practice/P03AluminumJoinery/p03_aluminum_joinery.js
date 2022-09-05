function aluminumJoinery(input) {
    const countJoinery = Number(input[0]);
    const typeOfJoinery = input[1];
    const deliveryType = input[2];

    let totalPrice = 0;

    switch (typeOfJoinery) {
        case "90X130":
            totalPrice = 110 * countJoinery;
            if (countJoinery > 60) {
                totalPrice *= 0.92;
            } else if (countJoinery > 30) {
                totalPrice *= 0.95;
            }
            break;
        case "100X150":
            totalPrice = 140 * countJoinery;
            if (countJoinery > 80) {
                totalPrice *= 0.90;
            } else if (countJoinery > 40) {
                totalPrice *= 0.94;
            }
            break;
        case "130X180":
            totalPrice = 190 * countJoinery;
            if (countJoinery > 50) {
                totalPrice *= 0.88;
            } else if (countJoinery > 20) {
                totalPrice *= 0.93;
            }
            break;
        case "200X300":
            totalPrice = 250 * countJoinery;
            if (countJoinery > 50) {
                totalPrice *= 0.86;
            } else if (countJoinery > 25) {
                totalPrice *= 0.91;
            }
            break;
    }

    if (deliveryType === "With delivery") {
        totalPrice += 60;
    }
    if (countJoinery > 99) {
        totalPrice *= 0.96;
    }

    if (countJoinery < 10) {
        console.log("Invalid order");
    } else {
        console.log(`${totalPrice.toFixed(2)} BGN`);
    }
}

aluminumJoinery(["40", "90X130", "Without delivery"]);
console.log("-------------------------");
aluminumJoinery(["105", "100X150", "With delivery"]);
console.log("-------------------------");
aluminumJoinery(["2", "130X180", "With delivery"]);