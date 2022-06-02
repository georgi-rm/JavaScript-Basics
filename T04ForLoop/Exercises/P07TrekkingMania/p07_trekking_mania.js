function trekkingMania(input) {
    const numberOfGroups = Number(input[0]);

    let countOfPeople = 0;
    let countOfPeopleClimingMusala = 0;
    let countOfPeopleClimingMonblan = 0;
    let countOfPeopleClimingKilimandjaro = 0;
    let countOfPeopleClimingK2 = 0;
    let countOfPeopleClimingEverest = 0;

    for (i = 1; i <= numberOfGroups; i++) {
        countOfPeopleInCurrentGroup = Number(input[i]);

        countOfPeople += countOfPeopleInCurrentGroup;

        if (countOfPeopleInCurrentGroup <= 5) {
            countOfPeopleClimingMusala += countOfPeopleInCurrentGroup;
        } else if (countOfPeopleInCurrentGroup <= 12) {
            countOfPeopleClimingMonblan += countOfPeopleInCurrentGroup;
        } else if (countOfPeopleInCurrentGroup <= 25) {
            countOfPeopleClimingKilimandjaro += countOfPeopleInCurrentGroup;
        } else if (countOfPeopleInCurrentGroup <= 40) {
            countOfPeopleClimingK2 += countOfPeopleInCurrentGroup;
        } else {
            countOfPeopleClimingEverest += countOfPeopleInCurrentGroup;
        }
    }

    const percentageForMusala = countOfPeopleClimingMusala / countOfPeople * 100;
    const percentageForMonblan = countOfPeopleClimingMonblan / countOfPeople * 100;
    const percentageForKilimandjaro = countOfPeopleClimingKilimandjaro / countOfPeople * 100;
    const percentageForK2 = countOfPeopleClimingK2 / countOfPeople * 100;
    const percentageForEverest = countOfPeopleClimingEverest / countOfPeople * 100;

    console.log(`${percentageForMusala.toFixed(2)}%`);
    console.log(`${percentageForMonblan.toFixed(2)}%`);
    console.log(`${percentageForKilimandjaro.toFixed(2)}%`);
    console.log(`${percentageForK2.toFixed(2)}%`);
    console.log(`${percentageForEverest.toFixed(2)}%`);

}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
console.log("-------------------------");
trekkingMania(["5", "25", "41", "31", "250", "6"]);
console.log("-------------------------");