function balls(input) {
    const countOfBalls = Number(input[0]);

    let totalPoints = 0;
    let pointsFromRed = 0;
    let pointsFromOrange = 0;
    let pointsFromYellow = 0;
    let pointsFromWhite = 0;
    let dividersFromBlack = 0;
    let countOtherBalls = 0;

    for (let i = 1; i <= countOfBalls; i++) {
        const ballColour = input[i];

        switch (ballColour) {
            case "red":
                pointsFromRed++;
                totalPoints += 5;
                break;
            case "orange":
                pointsFromOrange++;
                totalPoints += 10;
                break;
            case "yellow":
                pointsFromYellow++;
                totalPoints += 15;
                break;
            case "white":
                pointsFromWhite++;
                totalPoints += 20;
                break;
            case "black":
                dividersFromBlack++;
                totalPoints = Math.floor(totalPoints / 2);
                break;
            default:
                countOtherBalls++;
                break;
        }
    }
    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${pointsFromRed}`);
    console.log(`Orange balls: ${pointsFromOrange}`);
    console.log(`Yellow balls: ${pointsFromYellow}`);
    console.log(`White balls: ${pointsFromWhite}`);
    console.log(`Other colors picked: ${countOtherBalls}`);
    console.log(`Divides from black balls: ${dividersFromBlack}`);
}

balls(["3", "white", "black", "pink"]);
console.log("-------------------------");
balls(["5", "red", "red", "ddd", "ddd", "ddd"]);