function histogram(input) {
    let countOfNumber = Number(input[0]);

    let countOfNumbersByGroup = [0, 0, 0, 0, 0];

    for (let i = 1; i <= countOfNumber; i++) {
        const number = Number(input[i]);

        if (number < 200) {
            countOfNumbersByGroup[0]++;
        } else if (number < 400) {
            countOfNumbersByGroup[1]++;
        } else if (number < 600) {
            countOfNumbersByGroup[2]++;
        } else if (number < 800) {
            countOfNumbersByGroup[3]++;
        } else {
            countOfNumbersByGroup[4]++;
        }
    }

    for (i = 0; i < countOfNumbersByGroup.length; i++) {
        console.log(`${(countOfNumbersByGroup[i] / countOfNumber * 100).toFixed(2)}%`);
    }

}

histogram(["3", "1", "2", "999"]);
console.log("-------------------------");
histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);

console.log("-------------------------");
histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
console.log("-------------------------");
histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"])
