function logistics(input) {
    const numberOfPackages = Number(input[0]);

    let weightOfPackagesByBus = 0;
    let weightOfPackagesByTruck = 0;
    let weightOfPackagesByTrain = 0;

    for (i = 1; i <= numberOfPackages; i++) {
        const weightOfPackage = Number(input[i]);

        if (weightOfPackage < 4) {
            weightOfPackagesByBus += weightOfPackage;
        } else if (weightOfPackage < 12) {
            weightOfPackagesByTruck += weightOfPackage;
        } else {
            weightOfPackagesByTrain += weightOfPackage;
        }
    }

    const totalWeight = weightOfPackagesByBus + weightOfPackagesByTruck + weightOfPackagesByTrain;
    const averagePrice = ((weightOfPackagesByBus * 200) + (weightOfPackagesByTruck * 175) + (weightOfPackagesByTrain * 120)) / totalWeight;
    const percentageByBus = weightOfPackagesByBus / totalWeight * 100;
    const percentageByTruck = weightOfPackagesByTruck / totalWeight * 100;
    const percentageByTrain = weightOfPackagesByTrain / totalWeight * 100;

    console.log(averagePrice.toFixed(2));
    console.log(`${percentageByBus.toFixed(2)}%`);
    console.log(`${percentageByTruck.toFixed(2)}%`);
    console.log(`${percentageByTrain.toFixed(2)}%`);
}

logistics(["4", "1", "5", "16", "3"]);
console.log("-------------------------");
logistics(["5", "2", "10", "20", "1", "7"]);