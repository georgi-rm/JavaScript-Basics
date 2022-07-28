function theSongOfTheWheels(input) {
    const controlValue = Number(input[0]);

    let output = "";

    let passwordOutput = "No!";
    let countOfPasswords = 0;

    for (let a = 1; a <= 9; a++) {
        for (let b = a + 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d < c; d++) {
                    if (a * b + c * d == controlValue) {

                        output += `${a}${b}${c}${d} `;

                        countOfPasswords++;
                        if (countOfPasswords == 4) {
                            passwordOutput = `Password: ${a}${b}${c}${d}`;
                        }
                    }
                }
            }
        }
    }

    if (output.length > 0) {
        console.log(output);
    }
    console.log(passwordOutput);
}

theSongOfTheWheels(["11"]);
console.log("-------------------------");
theSongOfTheWheels(["139"]);
console.log("-------------------------");
theSongOfTheWheels(["110"]);
console.log("-------------------------");
theSongOfTheWheels(["55"]);