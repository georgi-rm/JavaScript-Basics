function onTimeForTheExam(input) {
    const hourOfExam = Number(input[0]);
    const minutesOfExam = Number(input[1]);
    const hourOfArrival = Number(input[2]);
    const minutesOfArrival = Number(input[3]);

    const timeOfExamInMinutes = hourOfExam * 60 + minutesOfExam;
    const timeOfArrivalInMinutes = hourOfArrival * 60 + minutesOfArrival;

    let timeDifferenceInMinutes = timeOfExamInMinutes - timeOfArrivalInMinutes;

    if (timeDifferenceInMinutes >= 0) {
        if (timeDifferenceInMinutes <= 30) {
            console.log("On time");
        } else {
            console.log("Early");
        }

        if (timeDifferenceInMinutes > 0 && timeDifferenceInMinutes < 60) {
            console.log(`${timeDifferenceInMinutes} minutes before the start`);
        } else if (timeDifferenceInMinutes >= 60) {
            const hours = Math.floor(timeDifferenceInMinutes / 60);
            const minutes = String(timeDifferenceInMinutes % 60).padStart(2, '0');
            console.log(`${hours}:${minutes} hours before the start`);
        }

    } else if (timeDifferenceInMinutes < 0) {
        console.log("Late");

        timeDifferenceInMinutes = Math.abs(timeDifferenceInMinutes);

        if (timeDifferenceInMinutes > 0 && timeDifferenceInMinutes < 60) {
            console.log(`${timeDifferenceInMinutes}  minutes after the start`);
        } else if (timeDifferenceInMinutes >= 60) {
            const hours = Math.floor(timeDifferenceInMinutes / 60);
            const minutes = String(timeDifferenceInMinutes % 60).padStart(2, '0');
            console.log(`${hours}:${minutes} hours after the start`);
        }
    }
}

onTimeForTheExam(["9", "30", "9", "50"]);
onTimeForTheExam(["9", "00", "8", "30"]);
onTimeForTheExam(["16", "00", "15", "00"]);
onTimeForTheExam(["9", "00", "10", "30"]);
onTimeForTheExam(["14", "00", "13", "55"]);
onTimeForTheExam(["11", "30", "8", "12"]);
onTimeForTheExam(["10", "00", "10", "00"]);
onTimeForTheExam(["11", "30", "10", "55"]);
onTimeForTheExam(["11", "30", "12", "29"]);