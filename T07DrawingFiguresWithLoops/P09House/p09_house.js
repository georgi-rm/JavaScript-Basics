function house(input) {

    const n = Number(input[0]);

    let line = "";

    for (let row = 0; row < Math.floor((n + 1) / 2); row++) {
        line = "";
        let initialStars = (n % 2 == 0) ? 2 : 1;

        for (let i = 0; i < Math.floor((n - (initialStars + 2 * row)) / 2); i++) {
            line += "-";
        }

        for (let i = 0; i < initialStars + 2 * row; i++) {
            line += "*";
        }

        for (let i = 0; i < Math.floor((n - (initialStars + 2 * row)) / 2); i++) {
            line += "-";
        }
        console.log(line);
    }

    line = "|";
    for (let i = 0; i < n - 2; i++) {
        line += "*";
    }

    line += "|";

    for (let row = 0; row <= n / 2 - 1; row++) {
        console.log(line);
    }
}

house(["2"]);
console.log("-------------------------");
house(["3"]);
console.log("-------------------------");
house(["4"]);
console.log("-------------------------");
house(["5"]);
console.log("-------------------------");
house(["6"]);