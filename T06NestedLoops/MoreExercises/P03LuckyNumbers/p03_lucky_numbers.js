function luckyNumbers(input) {
    const n = Number(input[0]);

    let output = "";

    for (let x1 = 1; x1 <= 9; x1++) {
        for (let x2 = 1; x2 <= 9; x2++) {
            for (let x3 = 1; x3 <= 9; x3++) {
                for (let x4 = 1; x4 <= 9; x4++) {
                    if ((x1 + x2 === x3 + x4) && (n % (x1 + x2) === 0)) {
                        output += `${x1}${x2}${x3}${x4} `;
                    }
                }
            }
        }
    }

    console.log(output);
}

luckyNumbers(["3"]);
console.log("-------------------------");
luckyNumbers(["7"]);
console.log("-------------------------");
luckyNumbers(["24"]);