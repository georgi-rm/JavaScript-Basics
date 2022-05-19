function numbersFromNTo1(input) {

    const n = Number(input[0]);

    for (let i = n; i > 0; i--) {
        console.log(i);
    }
}

numbersFromNTo1(["2"]);
console.log("-------------------------");
numbersFromNTo1(["3"]);
console.log("-------------------------");
numbersFromNTo1(["5"]);