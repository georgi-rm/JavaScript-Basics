function happyCatParking(input) {
    const countOfDays = Number(input[0]);
    const countOfHoursPerDay = Number(input[1]);

    let total = 0;

    for (let day = 1; day <= countOfDays; day++) {
        let dayTotal = 0;

        for (let hour = 1; hour <= countOfHoursPerDay; hour++) {
            if (day % 2 == 0 && hour % 2 != 0) {
                dayTotal += 2.50;
            } else if (day % 2 != 0 && hour % 2 == 0) {
                dayTotal += 1.25;
            } else {
                dayTotal += 1;
            }
        }
        console.log(`Day: ${day} - ${dayTotal.toFixed(2)} leva`);
        total += dayTotal;
    }

    console.log(`Total: ${total.toFixed(2)} leva`);
}

happyCatParking(["2", "5"]);
console.log("-------------------------");
happyCatParking(["5", "2"]);