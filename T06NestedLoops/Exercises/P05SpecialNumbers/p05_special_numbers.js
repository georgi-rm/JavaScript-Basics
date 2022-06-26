function specialNumbers(input) {
    const n = Number(input[0]);

    let output = "";

    for (let i = 1; i <= 9; i++) {
        if (n % i != 0) {
            continue;
        }
        for (let j = 1; j <= 9; j++) {
            if (n % j != 0) {
                continue;
            }
            for (let k = 1; k <= 9; k++) {
                if (n % k != 0) {
                    continue;
                }
                for (let l = 1; l <= 9; l++) {
                    if (n % l == 0) {
                        output += `${i}${j}${k}${l} `;
                    }
                }
            }
        }
    }
    console.log(output);
}

specialNumbers(["3"]);
console.log("-------------------------");
specialNumbers(["11"]);
console.log("-------------------------");
specialNumbers(["16"]);
console.log("-------------------------");