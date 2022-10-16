function hotelRoom(input) {
    const month = input[0];
    const nights = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;
    // May & October
    if (month == 'May' || month == 'October') {
        studioPrice = 50 * nights;
        apartmentPrice = 65 * nights;
        if (nights > 7 && nights <= 14) {
            studioPrice *= 0.95;
        } else if (nights > 14) {
            studioPrice *= 0.7;
            apartmentPrice *= 0.9;
        }
        // June & September
    } else if (month == 'June' || month == 'September') {
        studioPrice = 75.2 * nights;
        apartmentPrice = 68.7 * nights;
        if (nights > 14) {
            studioPrice *= 0.8;
            apartmentPrice *= 0.9;
        }
    }
    // July & August
    else if (month == 'July' || month == 'August') {
        studioPrice = 76 * nights;
        apartmentPrice = 77 * nights;
        if (nights > 14) {
            apartmentPrice *= 0.9;
        }
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

// hotelRoom(['May', '15']);
// hotelRoom(['June', '14']);
// hotelRoom(['August', '20']);
