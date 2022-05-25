function numbersDivisibleby9(input) {
    const fromNumber = Number(input[0]);
    const toNumber = Number(input[1]);

    let sum = 0;

    for (i = fromNumber; i <= toNumber; i++) {
        if (i % 9 == 0) {
            sum += i;
        }
    }

    console.log(`The sum: ${sum}`);

    for (i = fromNumber; i <= toNumber; i++) {
        if (i % 9 == 0) {
            console.log(i);
        }
    }
}

numbersDivisibleby9(["100", "200"]);