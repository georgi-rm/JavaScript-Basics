function averageNumber(input) {
    const n = Number(input[0]);
    let sum = 0;

    for (i = 1; i <= n; i++) {
        sum += Number(input[i]);
    }

    const average = 1.0 * sum / n;
    console.log(average.toFixed(2));
}

averageNumber(["4", "3", "2", "4", "2"])
console.log("-------------------------");
averageNumber(["2", "6", "4"])
console.log("-------------------------");
averageNumber(["3", "82", "43", "22"])
console.log("-------------------------");
averageNumber(["4", "95", "23", "76", "23"])