function onTimeForTheExam(input) {
    const examHour = Number(input[0]); //9
    const examMin = Number(input[1]); //30
    const arriveHour = Number(input[2]); //9
    const arriveMinutes = Number(input[3]); //50

    let examTime = examHour * 60 + examMin; // 9*60 + 30 = 570
    let arrivalTime = arriveHour * 60 + arriveMinutes; // 9*60 + 50 = 590
    let timeDifference = examTime - arrivalTime; // 570 - 590 = -20

    let earlyHour = 0;
    let earlyMin = 0;
    let lateHour = 0;
    let lateMin = 0;

    // On time
    if (timeDifference >= 0 && timeDifference <= 30) {
        if (timeDifference == 0) {
            console.log('On time');
        } else {
            console.log('On time');
            console.log(`${timeDifference} minutes before the start`);
        }
    }
    // Early
    else if (timeDifference > 30) {
        earlyHour = Math.floor(timeDifference / 60);
        earlyMin = timeDifference % 60;
        if (timeDifference > 30 && timeDifference <= 59) {
            console.log('Early');
            console.log(`${timeDifference} minutes before the start`);
        } else if (earlyMin < 10) {
            console.log('Early');
            console.log(`${earlyHour}:0${earlyMin} hours before the start`);
        } else {
            console.log('Early');
            console.log(`${earlyHour}:${earlyMin} hours before the start`);
        }
        // Late
    } else {
        timeDifference = Math.abs(timeDifference); // 20
        lateHour = Math.floor(timeDifference / 60); // 0
        lateMin = timeDifference % 60; // 20
        if (timeDifference <= 59) {
            console.log('Late');
            console.log(`${timeDifference} minutes after the start`);
        } else if (lateMin < 10) {
            console.log('Late');
            console.log(`${lateHour}:0${lateMin} hours after the start`);
        } else {
            console.log('Late');
            console.log(`${lateHour}:${lateMin} hours after the start`);
        }
    }
}

// onTimeForTheExam(['9', '30', '9', '50']); // Correct
// onTimeForTheExam(['9', '00', '10', '30']); // Correct
// onTimeForTheExam(['10', '00', '10', '00']); // Correct
// onTimeForTheExam(['9', '00', '8', '30']); // Correct
// onTimeForTheExam(['14', '00', '13', '55']); // Correct
// onTimeForTheExam(['11', '30', '10', '55']); // Correct
// onTimeForTheExam(['16', '00', '15', '00']); // Correct
// onTimeForTheExam(['11', '30', '8', '12']); // Correct
onTimeForTheExam(['11', '30', '12', '29']); // Correct
