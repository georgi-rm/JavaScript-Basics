function everest(input) {
    let isClimbedEverest = false;
    let days = 1;
    let climbedMeters = 5364;

    let index = 0;

    while (input[index] !== "END") {
        if (input[index++] === "Yes") {
            days++;
            if (days > 5) {
                break;
            }
        }

        climbedMeters += Number(input[index]);

        if (climbedMeters >= 8848) {
            isClimbedEverest = true;
            break;
        }

        index++;
    }

    if (isClimbedEverest) {
        console.log(`Goal reached for ${days} days!`);
    } else {
        console.log("Failed!");
        console.log(climbedMeters);
    }
}

everest(["Yes", "1254", "Yes", "1402", "No", "250", "Yes", "635"]);
console.log("-------------------------");
everest(["Yes", "1000", "Yes", "945", "No", "1200", "END"]);
console.log("-------------------------");
everest(["Yes", "535", "Yes", "849", "Yes", "499", "Yes", "400", "Yes", "500"]);
console.log("-------------------------");
everest(["Yes", "700", "END"]);
