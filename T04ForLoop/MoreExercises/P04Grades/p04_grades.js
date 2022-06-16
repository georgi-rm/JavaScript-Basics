function grades(input) {
    const countOfStudents = Number(input[0]);

    let average = 0;

    let countOfStudentsTop = 0;
    let countOfStudentsBetween4And5 = 0;
    let countOfStudentsBetween3And4 = 0;
    let countOfStudentsFail = 0;

    for (i = 1; i <= countOfStudents; i++) {
        const grade = Number(input[i]);
        average += grade;

        if (grade < 3) {
            countOfStudentsFail++;
        } else if (grade < 4) {
            countOfStudentsBetween3And4++;
        } else if (grade < 5) {
            countOfStudentsBetween4And5++;
        } else {
            countOfStudentsTop++;
        }
    }

    average /= countOfStudents;
    const percentageOfStudentsTop = countOfStudentsTop / countOfStudents * 100;
    const percentageOfStudentsBetween4And5 = countOfStudentsBetween4And5 / countOfStudents * 100;
    const percentageOfStudentsBetween3And4 = countOfStudentsBetween3And4 / countOfStudents * 100;
    const percentageOfStudentsFail = countOfStudentsFail / countOfStudents * 100;

    console.log(`Top students: ${percentageOfStudentsTop.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percentageOfStudentsBetween4And5.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percentageOfStudentsBetween3And4.toFixed(2)}%`);
    console.log(`Fail: ${percentageOfStudentsFail.toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`);
}

grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
console.log("-------------------------");
grades(["6", "2", "3", "4", "5", "6", "2.2"]);