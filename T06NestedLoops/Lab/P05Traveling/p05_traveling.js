function traveling(input) {
    let index = 0;

    while (input[index] !== "End") {
        let desctinationName = input[index++];
        let valationPrice = Number(input[index++]);
        let savedMoney = 0;
        while (savedMoney < valationPrice) {
            savedMoney += Number(input[index++]);
        }
        console.log(`Going to ${desctinationName}!`);
    }
}

traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);
console.log("-------------------------");
traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);
