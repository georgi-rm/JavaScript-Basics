function reportSystem(input) {

    let index = 0;
    const sumToCollect = Number(input[index++]);

    let collectedSum = 0;
    let isSumCollected = false;

    let payedInCash = 0;
    let payedWithCard = 0;

    let countPayedInCash = 0;
    let countPayedWithCard = 0;

    let command = input[index++];

    let countOfRounds = 0;

    while (command !== "End") {
        countOfRounds++;
        let paymentAmount = Number(command);

        if (countOfRounds % 2 == 0) {
            if (paymentAmount < 10) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                collectedSum += paymentAmount;
                payedWithCard += paymentAmount;
                countPayedWithCard++;
            }
        } else {
            if (paymentAmount > 100) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                collectedSum += paymentAmount;
                payedInCash += paymentAmount;
                countPayedInCash++;
            }
        }

        if (collectedSum >= sumToCollect) {
            isSumCollected = true;
            break;
        }
        command = input[index++];
    }

    if (isSumCollected) {
        const averageInCash = 1.0 * payedInCash / countPayedInCash;
        const averageWithCard = 1.0 * payedWithCard / countPayedWithCard;

        console.log(`Average CS: ${averageInCash.toFixed(2)}`);
        console.log(`Average CC: ${averageWithCard.toFixed(2)}`);
    } else {
        console.log("Failed to collect required money for charity.");
    }
}

reportSystem(["500", "120", "8", "63", "256", "78", "317"]);
console.log("-------------------------");
reportSystem(["600", "86", "150", "98", "227", "End"]);