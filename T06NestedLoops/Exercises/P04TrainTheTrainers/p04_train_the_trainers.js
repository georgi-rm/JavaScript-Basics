function trainTheTrainers(input) {
    const judges = Number(input[0]);
    let index = 1;

    let totalScore = 0;
    let totalMarks = 0;

    while(input[index] !== "Finish") {
        const presentationName = input[index++];
        let presentationScore = 0;

        for (let i = 0; i < judges; i++) {
            presentationScore += Number(input[index++]);
        }

        const presentationAverageScore = presentationScore / judges;
        console.log(`${presentationName} - ${presentationAverageScore.toFixed(2)}.`);

        totalScore += presentationScore;
        totalMarks += judges;
    }

    const averageScore = totalScore / totalMarks;

    console.log(`Student's final assessment is ${averageScore.toFixed(2)}.`);
}

trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
console.log("-------------------------");
trainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);
console.log("-------------------------");
trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);