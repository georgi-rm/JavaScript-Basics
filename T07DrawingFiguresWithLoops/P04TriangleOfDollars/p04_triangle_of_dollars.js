function triangleOfDollars(input) {
    const n = Number(input[0]);

    let output = "";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            output += "$ ";
        }
        console.log(output);
        output = "";
    }
}

triangleOfDollars(["2"]);
console.log("-------------------------");
triangleOfDollars(["3"]);
console.log("-------------------------");
triangleOfDollars(["4"]);
console.log("-------------------------");
triangleOfDollars(["5"]);