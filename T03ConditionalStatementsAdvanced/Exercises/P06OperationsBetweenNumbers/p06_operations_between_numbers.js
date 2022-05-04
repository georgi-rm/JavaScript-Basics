function operationsBetweenNumbers(input) {
    const firstOperand = Number(input[0]);
    const secondOperand = Number(input[1]);
    const typeOfOperation = input[2];

    let result;

    switch (typeOfOperation) {
        case "+":
        case "-":
        case "*":
            if (typeOfOperation == "+") {
                result = firstOperand + secondOperand;
            } else if (typeOfOperation == "-") {
                result = firstOperand - secondOperand;
            } else {
                result = firstOperand * secondOperand;
            }

            let evenOfOdd = "";
            if (result % 2 == 0) {
                evenOfOdd = "even"
            } else {
                evenOfOdd = "odd"
            }
            console.log(`${firstOperand} ${typeOfOperation} ${secondOperand} = ${result} - ${evenOfOdd}`);
            break;
        case "/":
        case "%":
            if (secondOperand == 0) {
                console.log(`Cannot divide ${firstOperand} by zero`);
            } else {
                if (typeOfOperation == "/") {
                    result = (firstOperand / secondOperand).toFixed(2);
                } else {
                    result = firstOperand % secondOperand;
                }
                console.log(`${firstOperand} ${typeOfOperation} ${secondOperand} = ${result}`);
            }
            break;
    }
}

operationsBetweenNumbers(["10", "12", "+"]);
operationsBetweenNumbers(["123", "12", "/"]);
operationsBetweenNumbers(["112", "0", "/"]);
operationsBetweenNumbers(["10", "1", "-"]);
operationsBetweenNumbers(["10", "3", "%"]);
operationsBetweenNumbers(["10", "0", "%"]);
operationsBetweenNumbers(["7", "3", "*"]);