function sumPrimeNonPrime(input) {

    let index = 0;
    let sumOfPrime = 0;
    let sumOfNonPrime = 0;

    while (input[index] !== "stop") {
        const number = Number(input[index++]);
        if (number < 0) {
            console.log("Number is negative.");
            continue;
        }

        let isPrime = true;
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            sumOfPrime += number;
        } else {
            sumOfNonPrime += number;
        }
    }

    console.log(`Sum of all prime numbers is: ${sumOfPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumOfNonPrime}`);
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
console.log("-------------------------");
sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
console.log("-------------------------");
sumPrimeNonPrime(["0", "-9", "0", "stop"]);