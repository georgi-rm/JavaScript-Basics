function FishTank(input) {
    let length = Number(input[0]);
    let weigth = Number(input[1]);
    let heigth = Number(input[2]);
    let alreadyFilledPercentage = Number(input[3]);

    let volumeOfFishTankInLiters = length * weigth * heigth / 1000;
    let volumeOfNeededWatter = volumeOfFishTankInLiters * (1 - alreadyFilledPercentage / 100);

    console.log(volumeOfNeededWatter);
}

FishTank(["85", "75", "47", "17"])
FishTank(["105", "77", "89", "18.5"])
