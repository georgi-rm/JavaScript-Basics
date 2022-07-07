function examPreparation(input) {
    const countOfAllowedBadMarks = Number(input[0]);

    let countOfBadMarks = 0;
    let index = 1;
    let command = input[index++];
    let lastProblem = "";
    let countOfProblems = 0;

    let sumOfMarks = 0;
    let quantityOfMarks = 0;

    while (command !== "Enough") {

        lastProblem = command;
        countOfProblems++;

        const mark = Number(input[index++]);

        sumOfMarks += mark;
        quantityOfMarks++;

        if (mark <= 4) {
            countOfBadMarks++;
            if (countOfBadMarks >= countOfAllowedBadMarks) {
                break;
            }
        }
        command = input[index++];
    }

    const averageScore = sumOfMarks / quantityOfMarks;

    if (countOfBadMarks >= countOfAllowedBadMarks) {
        console.log(`You need a break, ${countOfBadMarks} poor grades.`);
    } else {
        console.log(`Average score: ${averageScore.toFixed(2)}`)
        console.log(`Number of problems: ${countOfProblems}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}

examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
console.log("-------------------------");
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);