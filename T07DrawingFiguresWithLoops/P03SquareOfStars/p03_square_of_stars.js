function squareOfStars(input) {

    const n = Number(input[0]);

    let output = "";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            output += "* ";
        }
        console.log(output);
        output = "";
    }
}

squareOfStars(["2"]);
console.log("-------------------------");
squareOfStars(["3"]);
console.log("-------------------------");
squareOfStars(["4"]);