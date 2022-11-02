function summerOutfit(input) {
    const degrees = Number(input[0]);
    const day = input[1];
    let outfit = '';
    let shoes = '';

    if (degrees >= 10 && degrees <= 18) {
        switch (day) {
            case 'Morning':
                outfit = 'Sweatshirt';
                shoes = 'Sneakers';
                break;
            case 'Afternoon':
            case 'Evening':
                outfit = 'Shirt';
                shoes = 'Moccasins';
                break;
            default:
                break;
        }
        // if (day == 'Morning') {
        //     outfit = 'Sweatshirt';
        //     shoes = 'Sneakers';
        // } else if (day == 'Afternoon' || day == 'Evening') {
        //     outfit = 'Shirt';
        //     shoes = 'Moccasins';
        // }
    } else if (degrees > 18 && degrees <= 24) {
        if (day == 'Morning') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (day == 'Afternoon') {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        } else if (day == 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    } else if (degrees >= 25) {
        if (day == 'Morning') {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        } else if (day == 'Afternoon') {
            outfit = 'Swim Suit';
            shoes = 'Barefoot';
        } else if (day == 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
// summerOutfit(['16', 'Morning']);
// summerOutfit(['22', 'Afternoon']);
// summerOutfit(['28', 'Evening']);
