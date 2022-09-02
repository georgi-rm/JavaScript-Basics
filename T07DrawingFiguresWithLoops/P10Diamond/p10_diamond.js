function diamond(input) {
    const n = Number(input[0]);

    let line = "";

    let leftRightDashes = Math.floor((n - 1) / 2);

    for (let row = 0; row < n; row++) {
        line = "";

        let midDashes = n - 2 * leftRightDashes - 2;

        for (let i = 0; i < leftRightDashes; i++) {
            line += "-";
        }

        line += "*";

        for (let i = 0; i < midDashes; i++) {
            line += "-";
        }

        if (midDashes >= 0) {
            line += "*";
        }

        for (let i = 0; i < leftRightDashes; i++) {
            line += "-";
        }

        console.log(line);

        if (row < Math.floor((n - 1) / 2)) {
            leftRightDashes--;
        } else {
            leftRightDashes++;
        }

        if (leftRightDashes > Math.floor((n - 1) / 2)) {
            break;
        }
    }
}

diamond(["1"]);
console.log("-------------------------");
diamond(["2"]);
console.log("-------------------------");
diamond(["3"]);
console.log("-------------------------");
diamond(["4"]);
console.log("-------------------------");
diamond(["5"]);
console.log("-------------------------");
diamond(["6"]);
console.log("-------------------------");
diamond(["7"]);
console.log("-------------------------");
diamond(["8"]);
console.log("-------------------------");
diamond(["9"]);