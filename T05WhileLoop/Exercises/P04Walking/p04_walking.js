function walking(input) {
    const goal = 10000;
    let steps = 0;

    let index = 0;

    while (steps < goal) {
        const command = input[index++];
        if (command === "Going home") {
            steps += Number(input[index++]);
            break;
        }
        steps += Number(command);
    }

    const stepsDifference = Math.abs(steps - goal);

    if (steps >= goal) {
        console.log("Goal reached! Good job!");
        console.log(`${stepsDifference} steps over the goal!`);
    } else {
        console.log(`${stepsDifference} more steps to reach goal.`);
    }
}

walking(["1000", "1500", "2000", "6500"]);
console.log("-------------------------");
walking(["1500", "300", "2500", "3000", "Going home", "200"])
console.log("-------------------------");
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])
console.log("-------------------------");
walking(["125", "250", "4000", "30", "2678", "4682"])