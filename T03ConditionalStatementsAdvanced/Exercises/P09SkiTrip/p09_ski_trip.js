function skiTrip(input) {
    const daysToStay = Number(input[0]);
    const typeOfRoom = input[1];
    const mark = input[2];

    let totalPrice = 0;

    switch (typeOfRoom) {
        case "room for one person":
            totalPrice = 18 * (daysToStay - 1);
            break;
        case "apartment":
            totalPrice = 25 * (daysToStay - 1);

            if (daysToStay < 10) {
                totalPrice *= 0.7;
            } else if (daysToStay <= 15) {
                totalPrice *= 0.65;
            } else {
                totalPrice *= 0.5;
            }
            break;
        case "president apartment":
            totalPrice = 35 * (daysToStay - 1);

            if (daysToStay < 10) {
                totalPrice *= 0.9;
            } else if (daysToStay <= 15) {
                totalPrice *= 0.85;
            } else {
                totalPrice *= 0.8;
            }
            break
    }

    if (mark === "positive") {
        totalPrice *= 1.25;
    } else {
        totalPrice *= 0.9;
    }

    console.log(totalPrice.toFixed(2));
}

skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
skiTrip(["12", "room for one person", "positive"]);
skiTrip(["2", "apartment", "positive"]);