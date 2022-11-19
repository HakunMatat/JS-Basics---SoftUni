function pastryShop(input) {
    let sweet = input[0];
    let purchasedSweets = Number(input[1]);
    let dateOfDecember = Number(input[2]);
    let cakePrice = 0;
    let soufflePrice = 0;
    let baklavaPrice = 0;
    let sum = 0;
    let discount = 0;
    let discountSum = 0;

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
            sum = sum * 0.85;
        } else if (sum > 200) {
            sum = sum * 0.75;
        }
    }

    if (dateOfDecember <= 15) {
        sum = sum * 0.9;
    }

    if (dateOfDecember <= 15) {
        console.log(`${sum.toFixed(2)}`);
    } else if (dateOfDecember > 15 && dateOfDecember <= 22) {
        console.log(`${sum.toFixed(2)}`);
    } else {
        console.log(`${sum.toFixed(2)}`);
    }
}

pastryShop(['Cake', '10', '15']);
// pastryShop(['Souffle', '20', '24']);
// pastryShop(['Baklava', '50', '1']);
// pastryShop(['Cake', '5', '12']);
