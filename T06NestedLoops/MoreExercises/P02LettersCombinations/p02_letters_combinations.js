function lettersCombinations(input) {
    const beginIntervalCharCode = input[0].charCodeAt(0);
    const endIntervalCharCode = input[1].charCodeAt(0);
    const skipCharCode = input[2].charCodeAt(0);

    let countOfCombinations = 0;
    let output = "";

    for (let i = beginIntervalCharCode; i <= endIntervalCharCode; i++) {
        if (i === skipCharCode) {
            continue;
        }

        for (let j = beginIntervalCharCode; j <= endIntervalCharCode; j++) {
            if (j === skipCharCode) {
                continue;
            }

            for (let k = beginIntervalCharCode; k <= endIntervalCharCode; k++) {
                if (k === skipCharCode) {
                    continue;
                }

                countOfCombinations++;
                output += `${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)} `;
            }

        }

    }

    output += countOfCombinations;
    console.log(output);
}

lettersCombinations(["a", "c", "b"]);
console.log("-------------------------");
lettersCombinations(["f", "k", "h"]);
console.log("-------------------------");
lettersCombinations(["a", "c", "z"]);