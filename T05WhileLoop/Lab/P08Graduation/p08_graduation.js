function graduation(input) {
    const studentName = input[0];

    let index = 1;
    let graduationLevel = 1;
    let isRepeated = false;

    let sumOfGrades = 0;
    let quantityOfGrades = 0;

    while (graduationLevel <= 12) {
        const grade = Number(input[index++]);

        if (grade < 4) {
            if (isRepeated == false) {
                isRepeated = true;
                continue;
            } else {
                break;
            }
        }

        sumOfGrades += grade;
        quantityOfGrades++;
        graduationLevel++;
    }

    if (graduationLevel <= 12) {
        console.log(`${studentName} has been excluded at ${graduationLevel} grade`);
    } else {
        const averageGrades = sumOfGrades / quantityOfGrades;
        console.log(`${studentName} graduated. Average grade: ${averageGrades.toFixed(2)}`);
    }

}

graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
console.log("-------------------------");
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);