function evenPowersOf2(input) {
    const n = Number(input[0]);

    for (i = 0; i <= n; i += 2) {
        console.log(Math.pow(2, i));
    }
}

evenPowersOf2(["3"]);
console.log("-------------------------");
evenPowersOf2(["4"]);
console.log("-------------------------");
evenPowersOf2(["5"]);
console.log("-------------------------");
evenPowersOf2(["6"]);
console.log("-------------------------");
evenPowersOf2(["7"]);