function coins(input) {
    const changeInput = Number(input[0]);
    let change = changeInput * 100;
    let coins = 0;

    while (change >= 1) {
        if (change >= 200) {
            change -= 200;
        } else if (change >= 100) {
            change -= 100;
        } else if (change >= 50) {
            change -= 50;
        } else if (change >= 20) {
            change -= 20;
        } else if (change >= 10) {
            change -= 10;
        } else if (change >= 5) {
            change -= 5;
        } else if (change >= 2) {
            change -= 2;
        } else if (change >= 1) {
            change -= 1;
        }
        coins++;
    }
    console.log(coins);
}

coins(["1.23"]);
console.log("-------------------------");
coins(["2"]);
console.log("-------------------------");
coins(["0.56"]);
console.log("-------------------------");
coins(["2.73"]);