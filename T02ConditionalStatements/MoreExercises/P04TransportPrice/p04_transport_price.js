function transportPrice(input) {
    const kilometers = Number(input[0]);
    const tripType = input[1];

    let price = 0;

    if (kilometers >= 100) {
        price = kilometers * 0.06;
    } else if (kilometers >= 20) {
        price = kilometers * 0.09;
    } else {
        price = 0.70;
        if (tripType === "day") {
            price += kilometers * 0.79;
        } else {
            price += kilometers * 0.90;
        }
    }

    console.log(price.toFixed(2));

}

transportPrice([5, "day"]);

transportPrice([7, "night"]);

transportPrice([25, "day"]);

transportPrice([180, "night"]);