function uniquePinCodes(input) {
    const upperLimitOfFirstDigit = Number(input[0]);
    const upperLimitOfSecondDigit = Number(input[1]);
    const upperLimitOfThirdDigit = Number(input[2]);

    for (let firstDigit = 2; firstDigit <= upperLimitOfFirstDigit; firstDigit++) {
        if (firstDigit % 2 != 0) {
            continue;
        }
        for (let secondDigit = 2; secondDigit <= upperLimitOfSecondDigit; secondDigit++) {
            let isPrime = true;
            for (let i = 2; i < secondDigit; i++) {
                if (secondDigit % i == 0) {
                    isPrime = false;
                }
            }

            if (!isPrime) {
                continue;
            }

            for (let thirdDigit = 2; thirdDigit <= upperLimitOfThirdDigit; thirdDigit++) {
                if (thirdDigit % 2 == 0) {
                    console.log(`${firstDigit} ${secondDigit} ${thirdDigit}`);
                }
            }
        }

    }
}


uniquePinCodes(["3", "5", "5"]);
console.log("-------------------------");
uniquePinCodes(["8", "2", "8"]);