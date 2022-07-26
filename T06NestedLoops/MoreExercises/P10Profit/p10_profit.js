function profit(input) {
    const countOfCoinsOneLev = Number(input[0]);
    const countOfCoinsTwoLevs = Number(input[1]);
    const countOfCoinsFiveLevs = Number(input[2]);
    const sumToPay = Number(input[3])

    for (let quantityOfOneLev = 0; quantityOfOneLev <= countOfCoinsOneLev; quantityOfOneLev++) {
        for (let quantityOfTwoLevs = 0; quantityOfTwoLevs <= countOfCoinsTwoLevs; quantityOfTwoLevs++) {
            for (let quantityOfFiveLevs = 0; quantityOfFiveLevs <= countOfCoinsFiveLevs; quantityOfFiveLevs++) {
                if(quantityOfOneLev + quantityOfTwoLevs * 2 + quantityOfFiveLevs * 5 == sumToPay) {
                    console.log(`${quantityOfOneLev} * 1 lv. + ${quantityOfTwoLevs} * 2 lv. + ${quantityOfFiveLevs} * 5 lv. = ${sumToPay} lv.`);
                }
            }
        }
    }
}

profit(["3", "2", "3", "10"]);
console.log("-------------------------");
profit(["5", "3", "1", "7"]);