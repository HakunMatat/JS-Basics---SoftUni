function workingHours(input) {
    const currentTime = Number(input[0]);
    const currentDay = input[1];
    let workDay = '';

    switch (currentDay) {
        case 'Monday':
            workDay = 'work';
            break;
        case 'Tuesday':
            workDay = 'work';
            break;
        case 'Wednesday':
            workDay = 'work';
            break;
        case 'Thursday':
            workDay = 'work';
            break;
        case 'Friday':
            workDay = 'work';
            break;
        case 'Saturday':
            workDay = 'work';
            break;
        case 'Sunday':
            workDay = 'weekend';
            break;
        default:
            break;
    }

    if (currentTime <= 18 && currentTime >= 10 && workDay == 'work') {
        console.log('open');
    } else if (currentTime <= 18 && currentTime >= 10 && workDay == 'weekend') {
        console.log('closed');
    } else if (currentTime > 18 || currentTime < 10 || workDay == 'weekend') {
        console.log('closed');
    }
}

// workingHours(['11', 'Monday']);
// workingHours(['19', 'Friday']);
workingHours(['11', 'Sunday']);
