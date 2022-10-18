function skiTrip(input) {
    const days = Number(input[0]);
    const roomType = input[1];
    const rating = input[2];

    let nights = days - 1;

    let roomForOnePerson = 18 * nights;
    let apartment = 25 * nights;
    let presidentApartment = 35 * nights;

    let totalPrice = 0;

    if (roomType == 'room for one person') {
        totalPrice = roomForOnePerson * 1;
    } else if (roomType == 'apartment') {
        if (days < 10) {
            totalPrice = apartment * 0.7;
        } else if (days >= 10 && days <= 15) {
            totalPrice = apartment * 0.65;
        } else if (days > 15) {
            totalPrice = apartment * 0.5;
        }
    } else if (roomType == 'president apartment') {
        if (days < 10) {
            totalPrice = presidentApartment * 0.9;
        } else if (days >= 10 && days <= 15) {
            totalPrice = presidentApartment * 0.85;
        } else if (days > 15) {
            totalPrice = presidentApartment * 0.8;
        }
    }

    if (rating == 'positive') {
        totalPrice *= 1.25;
    } else if (rating == 'negative') {
        totalPrice *= 0.9;
    }

    console.log(totalPrice.toFixed(2));
}

// skiTrip(['14', 'apartment', 'positive']);
// skiTrip(['30', 'president apartment', 'negative']);
skiTrip(['2', 'apartment', 'positive']);
// skiTrip(['30', 'president apartment', 'negative']);
// skiTrip(['12', 'room for one person', 'positive']);
