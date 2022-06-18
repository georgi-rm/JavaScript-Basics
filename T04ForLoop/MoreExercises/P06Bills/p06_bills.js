function bills(input) {
    const countOfMonths = Number(input[0]);

    const billForWatterEachMonth = 20;
    const billForInternetEachMonth = 15;

    let billForElectricity = 0;
    const billForWater = billForWatterEachMonth * countOfMonths;
    const billForInternet = billForInternetEachMonth * countOfMonths;
    let billForOther = 0;


    for (i = 1; i <= countOfMonths; i++) {
        const currentBillForElectricity = Number(input[i]);

        billForElectricity += currentBillForElectricity;
        billForOther += (currentBillForElectricity + billForWatterEachMonth + billForInternetEachMonth) * 1.2;
    }

    const averageBills = (billForElectricity + billForWater + billForInternet + billForOther) / countOfMonths;

    console.log(`Electricity: ${billForElectricity.toFixed(2)} lv`);
    console.log(`Water: ${billForWater.toFixed(2)} lv`);
    console.log(`Internet: ${billForInternet.toFixed(2)} lv`);
    console.log(`Other: ${billForOther.toFixed(2)} lv`);
    console.log(`Average: ${averageBills.toFixed(2)} lv`);
}

bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
console.log("-------------------------");
bills(["8", "123.54", "231.54", "140.23", "100", "122.4", "430", "178.52", "64.2"]);