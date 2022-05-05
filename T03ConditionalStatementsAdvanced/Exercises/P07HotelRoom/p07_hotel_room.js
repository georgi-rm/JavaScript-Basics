function hotelRoom(input) {
    const month = input[0];
    const numberOfNights = Number(input[1]);

    let totalForStudio = 0;
    let totalForApartment = 0;

    switch (month) {
        case "May":
        case "October":
            totalForStudio = 50 * numberOfNights;
            totalForApartment = 65 * numberOfNights;

            if (numberOfNights > 14) {
                totalForStudio *= 0.7;
            } else if (numberOfNights > 7) {
                totalForStudio *= 0.95;
            }
            break;
        case "June":
        case "September":
            totalForStudio = 75.20 * numberOfNights;
            totalForApartment = 68.70 * numberOfNights;
            if (numberOfNights > 14) {
                totalForStudio *= 0.8;
            }
            break;
        case "July":
        case "August":
            totalForStudio = 76 * numberOfNights;
            totalForApartment = 77 * numberOfNights;
            break;
    }

    if (numberOfNights > 14) {
        totalForApartment *= 0.9;
    }

    console.log(`Apartment: ${totalForApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalForStudio.toFixed(2)} lv.`);

}

hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
hotelRoom(["August", "20"]);