function sumAndProduct(input) {
    const n = Number(input[0]);
    let validCombination = 0;
    let isFound = false;

    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c < 9; c++) {
                for (let d = 9; d >= c; d--) {
                    const sumDigits = a + b + c + d;
                    const multiplyDigits = a * b * c * d;
                    if ((n % 10 == 5) && (sumDigits == multiplyDigits)) {
                        validCombination = a * 1000 + b * 100 + c * 10 + d;
                        isFound = true;
                        break;
                    }
                    if ((n % 3 == 0) && (Math.floor(multiplyDigits / sumDigits) == 3)) {
                        validCombination = d * 1000 + c * 100 + b * 10 + a;
                        isFound = true;
                        break;
                    }
                }
                if (isFound) {
                    break;
                }
            }
            if (isFound) {
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (isFound) {
        console.log(validCombination);
    } else {
        console.log("Nothing found");
    }
}

sumAndProduct(["123"]);
console.log("-------------------------");
sumAndProduct(["145"]);
console.log("-------------------------");
sumAndProduct(["214"]);
