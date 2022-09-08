function bestPlayer(input) {
    const beginInterval = Number(input[0]);
    const endInterval = Number(input[1]);

    let beginNumber = beginInterval;
    let endNumber = endInterval;

    const beginForthDigit = beginNumber % 10;
    beginNumber = Math.floor(beginNumber / 10);
    const beginThirdDigit = beginNumber % 10;
    beginNumber = Math.floor(beginNumber / 10);
    const beginSecondDigit = beginNumber % 10;
    beginNumber = Math.floor(beginNumber / 10);
    const beginFirstDigit = beginNumber % 10;

    const endForthDigit = endNumber % 10;
    endNumber = Math.floor(endNumber / 10);
    const endThirdDigit = endNumber % 10;
    endNumber = Math.floor(endNumber / 10);
    const endSecondDigit = endNumber % 10;
    endNumber = Math.floor(endNumber / 10);
    const endFirstDigit = endNumber % 10;

    let output = "";

    for (let i = beginFirstDigit; i <= endFirstDigit; i++) {
        if (i % 2 == 0) {
            continue;
        }
        for (let j = beginSecondDigit; j <= endSecondDigit; j++) {
            if (j % 2 == 0) {
                continue;
            }
            for (let k = beginThirdDigit; k <= endThirdDigit; k++) {
                if (k % 2 == 0) {
                    continue;
                }
                for (let l = beginForthDigit; l <= endForthDigit; l++) {
                    if (l % 2 != 0) {
                        output += `${i}${j}${k}${l} `;
                    }
                }
            }
        }
    }

    console.log(output);
}

bestPlayer(["2345", "6789"]);
console.log("-------------------------");
bestPlayer(["3256", "6579"]);
console.log("-------------------------");
bestPlayer(["1365", "5877"]);
