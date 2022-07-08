function vacation(input) {
    const excursionPrice = Number(input[0]);
    const moneyAtStart = Number(input[1]);

    let money = moneyAtStart;
    let consecutiveSpendDays = 0;
    let totalDays = 0;
    let isFailed = false;

    let index = 2;

    while (money < excursionPrice) {
        let action = input[index++];
        let value = Number(input[index++]);

        switch (action) {
            case "spend":
                money -= value;
                if (money < 0) {
                    money = 0;
                }
                consecutiveSpendDays++;
                break;
            case "save":
                money += value;
                consecutiveSpendDays = 0;
                break;
        }

        totalDays++;
        if (consecutiveSpendDays >= 5) {
            isFailed = true;
            break;
        }
    }

    if (isFailed) {
        console.log("You can't save the money.");
        console.log(totalDays);
    } else {
        console.log(`You saved the money for ${totalDays} days.`);
    }
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
console.log("-------------------------");
vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
console.log("-------------------------");
vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"])