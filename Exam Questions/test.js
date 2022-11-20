function computerRoom(input) {
    let month = input[0];
    let hoursSpend = Number(input[1]);
    let peopleCount = Number(input[2]);
    let dayTime = input[3];

    let discountOne = 0.1;

    let discountTwo = 0.5;

    if (month === 'march' && 'april' && 'may' && dayTime == 'day') {
        let dayPrisePerHour = 10.5;
        let totalVisitCost = dayPrisePerHour * peopleCount * hoursSpend;
        {
            console.log(`Price per person for one hour: ${dayPrisePerHour.toFixed(2)}`);
            console.log(`Total cost of the visit: ${totalVisitCost.toFixed(2)}`);
        }
    } else if (month === 'june' && 'july' && 'august' && dayTime == 'night') {
    }
    if (peopleCount >= 4 && hoursSpend >= 5) {
        let nightPrisePerHour = 10.2;
        let firstDiscount = nightPrisePerHour - nightPrisePerHour * discountOne;
        let secondDiscount = firstDiscount - firstDiscount * discountTwo;
        let totalVisitCostTwo = secondDiscount * peopleCount * hoursSpend;

        {
            console.log(`Price per person for one hour: ${secondDiscount.toFixed(2)}`);
        }
        console.log(`Total cost of the visit: ${totalVisitCostTwo.toFixed(2)}`);
    }
}

computerRoom(['march', '3', '3', 'day']);
computerRoom(['july', '5', '5', 'night']);
