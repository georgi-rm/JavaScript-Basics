function sleepyTomCat(input) {
    const daysHoliday = Number(input[0]);

    const minutesToPlay = daysHoliday * 127 + (365 - daysHoliday) * 63;

    const limitOfMinutesToPlay = 30000;

    const minutesDifference = Math.abs(limitOfMinutesToPlay - minutesToPlay);

    if (minutesToPlay > limitOfMinutesToPlay) {
        console.log("Tom will run away");
        console.log(`${Math.floor(minutesDifference / 60)} hours and ${minutesDifference % 60} minutes more for play`);
    } else {
        console.log("Tom sleeps well");
        console.log(`${Math.floor(minutesDifference / 60)} hours and ${minutesDifference % 60} minutes less for play`);
    }
}

sleepyTomCat([20]);

sleepyTomCat([113]);
