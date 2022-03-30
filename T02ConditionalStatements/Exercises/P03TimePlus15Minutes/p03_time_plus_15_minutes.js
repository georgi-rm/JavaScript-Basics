function timePlus15Minutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    minutes = minutes + 15;

    if (minutes > 59) {
        hours = hours + 1;
        minutes = minutes - 60;
    }

    if (hours > 23) {
        hours = hours - 24;
    }

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}

timePlus15Minutes(["1", "46"]);
timePlus15Minutes(["0", "01"]);
timePlus15Minutes(["23", "59"]);
timePlus15Minutes(["11", "08"]);
timePlus15Minutes(["12", "49"]);