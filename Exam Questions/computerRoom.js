function computerRoom(input) {
    let month = input[0];
    let hoursSpend = Number(input[1]);
    let peopleCount = Number(input[2]);
    let dayTime = input[3];
    let pricePerHour = 0;

    if ((month === 'march' || month === 'april' || month === 'may') && dayTime == 'day') {
        pricePerHour = 10.5;
        if (peopleCount >= 4) {
            pricePerHour = pricePerHour * 0.9;
        } else {
            pricePerHour = 10.5;
        }
        if (hoursSpend >= 5) {
            pricePerHour = pricePerHour * 0.5;
        } else {
            pricePerHour = pricePerHour * 1;
        }
    } else if ((month === 'march' || month === 'april' || month === 'may') && dayTime == 'night') {
        pricePerHour = 8.4;
        if (peopleCount >= 4) {
            pricePerHour = pricePerHour * 0.9;
        } else {
            pricePerHour = 10.5;
        }
        if (hoursSpend >= 5) {
            pricePerHour = pricePerHour * 0.5;
        } else {
            pricePerHour = pricePerHour * 1;
        }
    } else if ((month === 'june' || month === 'july' || month === 'august') && dayTime == 'day') {
        pricePerHour = 12.6;
        if (peopleCount >= 4) {
            pricePerHour = pricePerHour * 0.9;
        } else {
            pricePerHour = 10.5;
        }
        if (hoursSpend >= 5) {
            pricePerHour = pricePerHour * 0.5;
        } else {
            pricePerHour = pricePerHour * 1;
        }
    } else if ((month === 'june' || month === 'july' || month === 'august') && dayTime == 'night') {
        pricePerHour = 10.2;
        if (peopleCount >= 4) {
            pricePerHour = pricePerHour * 0.9;
        } else {
            pricePerHour = 10.5;
        }
        if (hoursSpend >= 5) {
            pricePerHour = pricePerHour * 0.5;
        } else {
            pricePerHour = pricePerHour * 1;
        }
    } else if (month === 'january' || month === 'february' || month === 'september' || month === 'october' || month === 'december') {
    }
    console.log(`Price per person for one hour: ${pricePerHour.toFixed(2)}`);
    console.log(`Total cost of the visit: ${(pricePerHour * hoursSpend * peopleCount).toFixed(2)}`);
}
computerRoom(['march', '3', '3', 'day']);
computerRoom(['july', '5', '5', 'night']);
