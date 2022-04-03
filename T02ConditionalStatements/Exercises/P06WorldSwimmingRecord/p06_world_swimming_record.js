function worldSwimmingRecord(input) {
    const worldRecord = Number(input[0]);
    const distanceInMeters = Number(input[1]);
    const timeForOneMeter = Number(input[2]);

    const personalTime = distanceInMeters * timeForOneMeter
        + Math.floor(distanceInMeters / 15) * 12.5;

    if (personalTime < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${personalTime.toFixed(2)} seconds.`);
    } else {
        const timeDifference = personalTime - worldRecord;
        console.log(`No, he failed! He was ${timeDifference.toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(["10464", "1500", "20"])
worldSwimmingRecord(["55555.67", "3017", "5.03"])