function fruitShop(input) {
    const fruit = input[0];
    const day = input[1];
    const quantity = Number(input[2]);
    let isItError = true;
    let price = 0;

    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            switch (fruit) {
                case 'banana':
                    price = quantity * 2.5;
                    break;
                case 'apple':
                    price = quantity * 1.2;
                    break;
                case 'orange':
                    price = quantity * 0.85;
                    break;
                case 'grapefruit':
                    price = quantity * 1.45;
                    break;
                case 'kiwi':
                    price = quantity * 2.7;
                    break;
                case 'pineapple':
                    price = quantity * 5.5;
                    break;
                case 'grapes':
                    price = quantity * 3.85;
                    break;
                default:
                    console.log('error');
                    break;
            }
            break;
        case 'Saturday':
        case 'Sunday':
            switch (fruit) {
                case 'banana':
                    price = quantity * 2.7;
                    break;
                case 'apple':
                    price = quantity * 1.25;
                    break;
                case 'orange':
                    price = quantity * 0.9;
                    break;
                case 'grapefruit':
                    price = quantity * 1.6;
                    break;
                case 'kiwi':
                    price = quantity * 3;
                    break;
                case 'pineapple':
                    price = quantity * 5.6;
                    break;
                case 'grapes':
                    price = quantity * 4.2;
                    break;
                default:
                    console.log('error');
                    break;
            }
            break;
        default:
            console.log('error');
            break;
    }

    if (price > 0 || price < 0) {
        console.log(price.toFixed(2));
    } else {
    }
}

fruitShop(['apple', 'Tuesday', '2']);
fruitShop(['orange', 'Sunday', '3']);
fruitShop(['kiwi', 'Monday', '2.5']);
fruitShop(['grapes', 'Saturday', '0.5']);
fruitShop(['tomato', 'Monday', '0.5']);
