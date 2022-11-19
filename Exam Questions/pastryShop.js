function pastryShop(input) {
    let sweet = input[0];
    let purchasedSweets = Number(input[1]);
    let dateOfDecember = Number(input[2]);
    cakePrice = 0;
    soufflePrice = 0;
    baklavaPrice = 0;
    sum = 0;
    discountSum = 0;

    if (sweet === 'Cake') {
        if (dateOfDecember <= 15) {
            cakePrice = 24;
            sum = cakePrice * purchasedSweets;
        } else {
            cakePrice = 28.7;
            sum = cakePrice * purchasedSweets;
        }
    } else if (sweet === 'Souffle') {
        if (dateOfDecember <= 15) {
            soufflePrice = 6.66;
            sum = soufflePrice * purchasedSweets;
        } else {
            soufflePrice = 9.8;
            sum = soufflePrice * purchasedSweets;
        }
    } else if (sweet === 'Baklava') {
        if (dateOfDecember <= 15) {
            baklavaPrice = 12.6;
            sum = baklavaPrice * purchasedSweets;
        } else {
            baklavaPrice = 16.98;
            sum = baklavaPrice * purchasedSweets;
        }
    }

    if (dateOfDecember <= 22) {
        if (sum >= 100 && sum <= 200) {
            discountSum = sum - sum * 0.15;
        } else if (sum > 200) {
            discountSum = sum - sum * 0.25;
        }
    }

    if (dateOfDecember <= 15) {
        bonusDiscount = discountSum - discountSum * 0.1;
        console.log(`${bonusDiscount.toFixed(2)}`);
    } else if (dateOfDecember > 15 && dateOfDecember <= 22) {
        console.log(`${discountSum.toFixed(2)}`);
    } else {
        console.log(`${sum.toFixed(2)}`);
    }
}

// pastryShop(['Cake', '10', '15']);
// pastryShop(['Souffle', '20', '24']);
pastryShop(['Baklava', '50', '1']);
// pastryShop(['Cake', '5', '12']);
