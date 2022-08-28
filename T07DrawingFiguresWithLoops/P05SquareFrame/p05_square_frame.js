function squareFrame(input) {

    const n = Number(input[0]);

    for (let i = 0; i < n; i++) {
        let sideSymbol = "|";

        if (i == 0 || i == n - 1) {
            sideSymbol = "+";
        }

        let output = `${sideSymbol} `;

        for (let j = 0; j < n - 2; j++) {
            output += "- ";
        }
        output += sideSymbol;
        console.log(output);

    }
}

squareFrame(["3"]);
console.log("-------------------------");
squareFrame(["4"]);
console.log("-------------------------");
squareFrame(["5"]);
console.log("-------------------------");
squareFrame(["6"]);