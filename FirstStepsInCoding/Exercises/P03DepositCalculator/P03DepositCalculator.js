function DepositCalculator(input){
    let depositedSum = Number(input[0]);
    let periodOfDeposit = Number(input[1]);
    let yearlyPercentageIncrease = Number(input[2]);

    let finalSum = depositedSum + periodOfDeposit * depositedSum * yearlyPercentageIncrease / 100 / 12;
    console.log(finalSum);
}

DepositCalculator(["200", "3", "5.7"]);
DepositCalculator(["2350", "6", "7"]);