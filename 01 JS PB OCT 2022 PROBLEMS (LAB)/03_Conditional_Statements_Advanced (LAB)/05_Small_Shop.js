function smallShop(Input) {
    const product = Input[0];
    const town = Input[1];
    const quantity = Number(Input[2]);
    let totalPrice = 0;

    switch (town) {
        case 'Sofia':
            switch (product) {
                case 'coffee':
                    totalPrice = quantity * 0.5;
                    break;
                case 'water':
                    totalPrice = quantity * 0.8;
                    break;
                case 'beer':
                    totalPrice = quantity * 1.2;
                    break;
                case 'sweets':
                    totalPrice = quantity * 1.45;
                    break;
                case 'peanuts':
                    totalPrice = quantity * 1.6;
                    break;
                default:
                    break;
            }
            break;
        case 'Plovdiv':
            switch (product) {
                case 'coffee':
                    totalPrice = quantity * 0.4;
                    break;
                case 'water':
                    totalPrice = quantity * 0.7;
                    break;
                case 'beer':
                    totalPrice = quantity * 1.15;
                    break;
                case 'sweets':
                    totalPrice = quantity * 1.3;
                    break;
                case 'peanuts':
                    totalPrice = quantity * 1.5;
                    break;
                default:
            }
            break;
        case 'Varna':
            switch (product) {
                case 'coffee':
                    totalPrice = quantity * 0.45;
                    break;
                case 'water':
                    totalPrice = quantity * 0.7;
                    break;
                case 'beer':
                    totalPrice = quantity * 1.1;
                    break;
                case 'sweets':
                    totalPrice = quantity * 1.35;
                    break;
                case 'peanuts':
                    totalPrice = quantity * 1.55;
                    break;
                default:
                    break;
            }
        default:
            break;
    }
    console.log(totalPrice);
}

// smallShop(['coffee', 'Varna', '2']); // 0.9
// smallShop(['peanuts', 'Plovdiv', '1']); // 1.5
// smallShop(['beer', 'Sofia', '2']); // 2.4
// smallShop(['water', 'Plovdiv', '2']); // 1.4
smallShop(['sweets', 'Sofia', '2.23']); // 3.2335
