function CharityCampaign(input) {
    let numberOfDays = Number(input[0]);
    let numberOfSweetMakers = Number(input[1]);
    let numberOfCakes = Number(input[2]);
    let numberOfWaffles = Number(input[3]);
    let numberOfPancakes = Number(input[4]);

    let incomeForOneDayByOneSweetMaket = numberOfCakes * 45 + numberOfWaffles * 5.8 + numberOfPancakes * 3.2;
    let totalIncome = incomeForOneDayByOneSweetMaket * numberOfSweetMakers * numberOfDays * 7 / 8;
    
    console.log(totalIncome);
}

CharityCampaign(["23", "8", "14", "30", "16"])
CharityCampaign(["131", "5", "9", "33", "46"])