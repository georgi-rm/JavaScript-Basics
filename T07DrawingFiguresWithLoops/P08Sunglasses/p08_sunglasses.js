function sunglasses(input) {

    const n = Number(input[0]);

    let line = "";
    for (let row = 0; row < n * 2; row++) {
        line += "*";
    }
    for (let row = 0; row < n; row++) {
        line += " ";
    }
    for (let row = 0; row < n * 2; row++) {
        line += "*";
    }
    console.log(line);

    for (let row = 0; row < n - 2; row++) {
        line = "*";

        for (let i = 0; i < 2 * n - 2; i++) {
            line += "/";
        }

        line += "*";

        for (let i = 0; i < n; i++) {
            if (row == Math.floor((n - 1) / 2) - 1) {
                line += "|";
            } else {
                line += " ";
            }
        }

        line += "*";

        for (let i = 0; i < 2 * n - 2; i++) {
            line += "/";
        }

        line += "*";
        console.log(line);
    }

    line = "";
    for (let row = 0; row < n * 2; row++) {
        line += "*";
    }
    for (let row = 0; row < n; row++) {
        line += " ";
    }
    for (let row = 0; row < n * 2; row++) {
        line += "*";
    }
    console.log(line);
}

sunglasses(["3"]);
console.log("-------------------------");
sunglasses(["4"]);
console.log("-------------------------");
sunglasses(["5"]);