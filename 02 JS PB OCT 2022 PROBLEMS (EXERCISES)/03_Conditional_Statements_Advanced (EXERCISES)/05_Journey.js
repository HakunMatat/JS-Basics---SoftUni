function journey(input) {
    let budget = Number(input[0]);
    const season = input[1];
    let destination = '';
    let holidayType = '';
    // console.log(budget);

    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season == 'summer') {
            budget *= 0.3;
            holidayType = 'Camp';
        } else if (season == 'winter') {
            budget *= 0.7;
            holidayType = 'Hotel';
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        if (season == 'summer') {
            budget *= 0.4;
            holidayType = 'Camp';
        } else if (season == 'winter') {
            budget *= 0.8;
            holidayType = 'Hotel';
        }
    } else if (budget > 1000) {
        destination = 'Europe';
        budget *= 0.9;
        holidayType = 'Hotel';
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${holidayType} - ${budget.toFixed(2)}`);
}

// journey(['50', 'summer']);
// journey(['75', 'winter']);
// journey(['312', 'summer']);
// journey(['678.53', 'winter']);
journey(['1500', 'summer']);
