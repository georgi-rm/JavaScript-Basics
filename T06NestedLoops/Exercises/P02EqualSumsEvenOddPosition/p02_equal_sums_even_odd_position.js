function equalSumsEvenOddPosition(input) {
    const beginOfInterval = Number(input[0]);
    const endOfInterval = Number(input[1]);
    let output = "";

    for (let number = beginOfInterval; number <= endOfInterval; number++) {

        let sumOfOdd = 0;
        let sumOfEven = 0;

        let tempNumber = number;

        let position = 1;

        while (tempNumber > 0) {
            if (position % 2 == 0) {
                sumOfEven += (tempNumber % 10);
            } else {
                sumOfOdd += (tempNumber % 10);
            }

            position++;
            tempNumber = Math.floor(tempNumber / 10);
        }

        if (sumOfEven === sumOfOdd) {
            output += `${number} `;
        }
    }

    if (output != "") {
        console.log(output);
    }
}

equalSumsEvenOddPosition(["100000", "100050"]);
console.log("-------------------------");
equalSumsEvenOddPosition(["123456", "124000"]);
console.log("-------------------------");
equalSumsEvenOddPosition(["299900", "300000"]);
console.log("-------------------------");
equalSumsEvenOddPosition(["100115", "100120"]);