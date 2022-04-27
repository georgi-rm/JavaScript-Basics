function tradeCommissions(input) {
    const town = input[0];
    const volumeOfSales = Number(input[1]);

    let hasError = false;
    let commissionPercentage;

    switch (town) {
        case "Sofia":
            if (volumeOfSales < 0) {
                hasError = true;
            } else if (volumeOfSales <= 500) {
                commissionPercentage = 5;
            } else if (volumeOfSales <= 1000) {
                commissionPercentage = 7;
            } else if (volumeOfSales <= 10000) {
                commissionPercentage = 8;
            } else {
                commissionPercentage = 12;
            }
            break;
        case "Varna":
            if (volumeOfSales < 0) {
                hasError = true;
            } else if (volumeOfSales <= 500) {
                commissionPercentage = 4.5;
            } else if (volumeOfSales <= 1000) {
                commissionPercentage = 7.5;
            } else if (volumeOfSales <= 10000) {
                commissionPercentage = 10;
            } else {
                commissionPercentage = 13;
            }
            break;
        case "Plovdiv":
            if (volumeOfSales < 0) {
                hasError = true;
            } else if (volumeOfSales <= 500) {
                commissionPercentage = 5.5;
            } else if (volumeOfSales <= 1000) {
                commissionPercentage = 8;
            } else if (volumeOfSales <= 10000) {
                commissionPercentage = 12;
            } else {
                commissionPercentage = 14.5;
            }
            break;
        default:
            hasError = true;
            break;
    }

    if (hasError) {
        console.log("error");
    } else {
        let commission = volumeOfSales * commissionPercentage / 100;
        console.log(commission.toFixed(2));
    }
}

tradeCommissions(["Sofia", "1500"]);
tradeCommissions(["Plovdiv", "499.99"]);
tradeCommissions(["Varna", "3874.50"])
tradeCommissions(["Kaspichan", "-50"])