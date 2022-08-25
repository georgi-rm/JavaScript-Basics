function rectangleOf10X10Stars(input) {

    const n = Number(input[0]);

    let output = "";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            output += "*";
        }
        console.log(output);
        output = "";
    }
}

rectangleOf10X10Stars(["2"]);
console.log("-------------------------");
rectangleOf10X10Stars(["3"]);
console.log("-------------------------");
rectangleOf10X10Stars(["4"]);