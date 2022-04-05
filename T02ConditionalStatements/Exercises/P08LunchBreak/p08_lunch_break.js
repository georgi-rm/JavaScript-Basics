function LunchBreak(input) {
    const nameOfSerial = input[0];
    const lenthOfEpisode = Number(input[1]);
    const breakTime = Number(input[2]);

    const lunchTime = breakTime / 8;
    const sleepTime = breakTime / 4;
    const timeToWatch = breakTime - lunchTime - sleepTime;

    const timeDifference = Math.ceil(Math.abs(timeToWatch - lenthOfEpisode));
    if (timeToWatch >= lenthOfEpisode) {
        console.log(`You have enough time to watch ${nameOfSerial} and left with ${timeDifference} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${nameOfSerial}, you need ${timeDifference} more minutes.`);
    }
}

LunchBreak(["Game of Thrones", "60", "96"])

LunchBreak(["Teen Wolf", "48", "60"])