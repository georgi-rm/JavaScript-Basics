function multiplyBy2(input) {

    let index = 0;
    let number = Number(input[index++]);

    while (number >= 0) {
        const result = number * 2;
        console.log(`Result: ${result.toFixed(2)}`);
        number = Number(input[index++]);
    }
    console.log("Negative number!");

}

multiplyBy2(["12", "43.2144", "12.3", "543.23", "-20"]);
multiplyBy2(["23.43", "12.3245", "0", "65.23432", "23", "65", "-12"]);
multiplyBy2(["-123"]);