function getGreaterNumber(input) {
    const firstNumber = Number(input[0]);
    const secondNumber = Number(input[1]);

    let result;

    if(firstNumber > secondNumber) {
        result = firstNumber;
    } else {
        result = secondNumber;
    }

    console.log(result)
}

getGreaterNumber([5, 3]);
getGreaterNumber([3, 5])
getGreaterNumber([10, 10])
getGreaterNumber([-5, 5])

getGreaterNumber(["5", "3"]);
getGreaterNumber(["3", "5"])
getGreaterNumber(["10", "10"])
getGreaterNumber(["-5", "5"])