function accountBalance(input) {
    
    let index = 0;
    let operation = input[index++];
    let sum = 0;

    while(operation !== "NoMoreMoney") {
        const currentAmount = Number(operation);

        if (currentAmount < 0) {
            console.log("Invalid operation!");
            break;
        }

        console.log(`Increase: ${currentAmount.toFixed(2)}`);
        sum += currentAmount;
        operation = input[index++];
    }

    console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
console.log("-------------------------");
accountBalance(["120", "45.55", "-150"])