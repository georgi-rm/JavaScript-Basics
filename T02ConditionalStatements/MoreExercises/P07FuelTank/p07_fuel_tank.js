function fuelTank(input) {
    const fuelType = input[0];
    const fuelQuantity = Number(input[1]);

    if (fuelType === "Diesel") {
        if (fuelQuantity >= 25) {
            console.log("You have enough diesel.");
        } else {
            console.log("Fill your tank with diesel!");
        }
    } else if (fuelType === "Gasoline") {
        if (fuelQuantity >= 25) {
            console.log("You have enough gasoline.");
        } else {
            console.log("Fill your tank with gasoline!");
        }
    } else if (fuelType === "Gas") {
        if (fuelQuantity >= 25) {
            console.log("You have enough gas.");
        } else {
            console.log("Fill your tank with gas!");
        }
    } else {
        console.log("Invalid fuel!");
    }
}

fuelTank(["Diesel", 10]);
fuelTank(["Gasoline", 40]);
fuelTank(["Gas", 25]);
fuelTank(["Kerosene", 200]);
