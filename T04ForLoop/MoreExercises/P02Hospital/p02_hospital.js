function hospital(input) {
    const countOfDays = Number(input[0]);

    let countOfMedics = 7;
    let countOfTreatedPatients = 0;
    let countOfUntreatedPatients = 0;

    for (i = 1; i <= countOfDays; i++) {
        const countOfPatients = Number(input[i]);

        if (i % 3 == 0 && countOfUntreatedPatients > countOfTreatedPatients) {
            countOfMedics++;
        }

        if (countOfPatients <= countOfMedics) {
            countOfTreatedPatients += countOfPatients;
        } else {
            countOfTreatedPatients += countOfMedics;
            countOfUntreatedPatients += countOfPatients - countOfMedics;
        }
    }

    console.log(`Treated patients: ${countOfTreatedPatients}.`);
    console.log(`Untreated patients: ${countOfUntreatedPatients}.`);
}

hospital(["4", "7", "27", "9", "1"])
console.log("-------------------------");
hospital(["6", "25", "25", "25", "25", "25", "2"])
console.log("-------------------------");
hospital(["3", "7", "7", "7"])