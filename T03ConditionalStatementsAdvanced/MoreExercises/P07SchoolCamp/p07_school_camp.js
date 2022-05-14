function schoolCamp(input) {
    const season = input[0];
    const typeOfGroup = input[1];
    const numberOfStudents = Number(input[2]);
    const numberOfNights = Number(input[3]);

    let typeOfSport = "";
    let priceForOvernight = 0;

    switch (season) {
        case "Winter":
            switch (typeOfGroup) {
                case "girls":
                    priceForOvernight = 9.60;
                    typeOfSport = "Gymnastics";
                    break;
                case "boys":
                    priceForOvernight = 9.60;
                    typeOfSport = "Judo";
                    break;
                case "mixed":
                    priceForOvernight = 10;
                    typeOfSport = "Ski";
                    break;
            }
            break;
        case "Spring":
            switch (typeOfGroup) {
                case "girls":
                    priceForOvernight = 7.20;
                    typeOfSport = "Athletics";
                    break;
                case "boys":
                    priceForOvernight = 7.20;
                    typeOfSport = "Tennis";
                    break;
                case "mixed":
                    priceForOvernight = 9.50;
                    typeOfSport = "Cycling";
                    break;
            }
            break;
        case "Summer":
            switch (typeOfGroup) {
                case "girls":
                    priceForOvernight = 15;
                    typeOfSport = "Volleyball";
                    break;
                case "boys":
                    priceForOvernight = 15;
                    typeOfSport = "Football";
                    break;
                case "mixed":
                    priceForOvernight = 20;
                    typeOfSport = "Swimming";
                    break;
            }
            break;
    }

    let finalPrice = priceForOvernight * numberOfStudents * numberOfNights;

    if (numberOfStudents >= 50) {
        finalPrice *= 0.50;
    } else if (numberOfStudents >= 20) {
        finalPrice *= 0.85;
    } else if (numberOfStudents >= 10) {
        finalPrice *= 0.95;
    }


    console.log(`${typeOfSport} ${finalPrice.toFixed(2)} lv.`);
}

schoolCamp(["Spring", "girls", "20", "7"]);
console.log("-------------------------");
schoolCamp(["Winter", "mixed", "9", "15"]);
console.log("-------------------------");
schoolCamp(["Summer", "boys", "60", "7"]);
console.log("-------------------------");
schoolCamp(["Spring", "mixed", "17", "14"]);
console.log("-------------------------");