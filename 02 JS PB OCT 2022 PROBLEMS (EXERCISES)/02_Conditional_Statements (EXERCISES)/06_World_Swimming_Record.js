function worldSwimmingRecord(seconds) {
    let currectRecordSeconds = Number(seconds[0]);
    let distance = Number(seconds[1]);
    let secondsPerMeter = Number(seconds[2]);

    let ivansTime = distance * secondsPerMeter;
    let addedTime = Math.floor(distance / 15) * 12.5;
    let fullTimeIvan = ivansTime + addedTime;

    // console.log(ivansTime, addedTime, fullTimeIvan);

    if (currectRecordSeconds > fullTimeIvan) {
        console.log(`Yes, he succeeded! The new world record is ${fullTimeIvan.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(fullTimeIvan - currectRecordSeconds).toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(['10464', '1500', '20']);
// worldSwimmingRecord(['55555.67', '3017', '5.03']);
