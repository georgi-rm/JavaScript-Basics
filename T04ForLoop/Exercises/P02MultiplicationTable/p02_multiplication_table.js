function multiplicationTable(input) {
    const multiplier = Number(input[0]);

    for (i = 1; i <= 10; i++) {
        console.log(`${i} * ${multiplier} = ${i * multiplier}`);
    }
}

multiplicationTable(["5"]);