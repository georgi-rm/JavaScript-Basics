function christmasTree(input) {

    const n = Number(input[0]);
    for (let row = 0; row <= n; row++) {
        let line = "";

        for (let j = 0; j < n - row; j++) {
            line += " ";
        }

        for (let j = 0; j < row; j++) {
            line += "*";
        }

        line += " | ";

        for (let j = 0; j < row; j++) {
            line += "*";
        }
        line.trimEnd();
        console.log(line);
    }
}

christmasTree(["1"]);
console.log("-------------------------");
christmasTree(["2"]);
console.log("-------------------------");
christmasTree(["3"]);
console.log("-------------------------");
christmasTree(["4"]);