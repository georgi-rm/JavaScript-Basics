function TrainingLab(input) {
    let lengthCm = Number(input[0]) * 100;
    let widthCm = Number(input[1]) * 100;
    widthCm -= 100;
    let numberOfChairsByWidth = Math.floor(widthCm / 70);
    let numberOfChairsByLength = Math.floor(lengthCm / 120);
    let totalChairs = numberOfChairsByWidth * numberOfChairsByLength - 3;
    console.log(totalChairs);
}

TrainingLab(["15", "8.9"])
TrainingLab(["8.4", "5.2"])