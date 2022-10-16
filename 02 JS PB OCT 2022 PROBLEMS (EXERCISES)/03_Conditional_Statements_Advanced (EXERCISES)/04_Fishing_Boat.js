function fishingBoat(input) {
    const budget = Number(input[0]);
    const season = input[1];
    const fishermen = Number(input[2]);
    let fishboat = 0;
    let discount = 0;
    let totalPrice = 0;

    // Spring
    if (season == 'Spring') {
        fishboat = 3000;
        if (fishermen <= 6) {
            discount = 0.9;
            totalPrice = fishboat * discount;
            if (fishermen % 2 == 0 && season != 'Autumn') {
                totalPrice *= 0.95;
            }
        } else if (fishermen >= 7 && fishermen <= 11) {
            discount = 0.85;
            totalPrice = fishboat * discount;
            if (fishermen % 2 == 0 && season != 'Autumn') {
                totalPrice *= 0.95;
            }
        } else if (fishermen >= 12) {
            discount = 0.75;
            totalPrice = fishboat * discount;
            if (fishermen % 2 == 0 && season != 'Autumn') {
                totalPrice *= 0.95;
            }
        }
        // Summer & Autumn
    } else if (season == 'Summer' || season == 'Autumn') {
        fishboat = 4200;
        if (fishermen <= 6) {
            discount = 0.9;
            totalPrice = fishboat * discount;
            if (fishermen % 2 == 0 && season != 'Autumn') {
                totalPrice *= 0.95;
            }
        } else if (fishermen >= 7 && fishermen <= 11) {
            discount = 0.85;
            totalPrice = fishboat * discount;
            if (fishermen % 2 == 0 && season != 'Autumn') {
                totalPrice *= 0.95;
            }
        } else if (fishermen >= 12) {
            discount = 0.75;
            totalPrice = fishboat * discount;
            if (fishermen % 2 == 0 && season != 'Autumn') {
                totalPrice *= 0.95;
            }
        }
        // Winter
    } else if (season == 'Winter') {
        fishboat = 2600;
        if (fishermen <= 6) {
            discount = 0.9;
            totalPrice = fishboat * discount;
            if (fishermen % 2 == 0 && season != 'Autumn') {
                totalPrice *= 0.95;
            }
        } else if (fishermen >= 7 && fishermen <= 11) {
            discount = 0.85;
            totalPrice = fishboat * discount;
            if (fishermen % 2 == 0 && season != 'Autumn') {
                totalPrice *= 0.95;
            }
        } else if (fishermen >= 12) {
            discount = 0.75;
            totalPrice = fishboat * discount;
            if (fishermen % 2 == 0 && season != 'Autumn') {
                totalPrice *= 0.95;
            }
        }
    }

    if (budget >= totalPrice) {
        console.log(`Yes! You have ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva.`);
    }
}

// fishingBoat(['3000', 'Summer', '11']);
// fishingBoat(['3600', 'Autumn', '6']);
fishingBoat(['2000', 'Winter', '13']);
