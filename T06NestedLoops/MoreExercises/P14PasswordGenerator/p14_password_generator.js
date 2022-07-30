function passwordGenerator(input) {
    const n = Number(input[0]);
    const l = Number(input[1]);

    const charCodeOfSmallA = "a".charCodeAt(0);

    let output = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            for (let k = 0; k < l; k++) {
                for (let m = 0; m < l; m++) {
                    for (let o = 0; o <= n; o++) {
                        if (o > i && o > j) {
                            output += `${i}${j}${String.fromCharCode(charCodeOfSmallA + k)}${String.fromCharCode(charCodeOfSmallA + m)}${o} `;
                        }
                    }
                }
            }
        }
    }

    console.log(output);
}

passwordGenerator(["2", "4"]);
console.log("-------------------------");
passwordGenerator(["3", "1"]);
console.log("-------------------------");
passwordGenerator(["3", "2"]);
console.log("-------------------------");
passwordGenerator(["4", "2"]);