function onTimeForTheExam(input) {
    const hourExam = Number(input[0]);
    const minutesExam = Number(input[1]); // 9:30
    const arrivalHour = Number(input[2]); // 9:50
    const arrivalMinutes = Number(input[3]);
    let time = '';

    if (hourExam >= arrivalHour) {
        if (minutesExam > arrivalMinutes) {
            time = 'On Time';
        } else {
            time = 'Late';
        }
    }
}
