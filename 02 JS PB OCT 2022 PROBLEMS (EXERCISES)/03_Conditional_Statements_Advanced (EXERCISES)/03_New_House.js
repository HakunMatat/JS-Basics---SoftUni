function newHouse(input) {
    const flower = input[0];
    const quantity = Number(input[1]);
    const budget = Number(input[2]);
    let discount = 0;
    let finalPrice = 0;
    let flowerPrice = 0;

    if (flower == 'Roses') {
        flowerPrice = 5;
        if (quantity > 80) {
            discount = 0.9;
            finalPrice = flowerPrice * quantity * discount;
        } else {
            finalPrice = flowerPrice * quantity;
        }
    } else if (flower == 'Dahlias') {
        flowerPrice = 3.8;
        if (quantity > 90) {
            discount = 0.85;
            finalPrice = flowerPrice * quantity * discount;
        } else {
            finalPrice = flowerPrice * quantity;
        }
    } else if (flower == 'Tulips') {
        flowerPrice = 2.8;
        if (quantity > 80) {
            discount = 0.85;
            finalPrice = flowerPrice * quantity * discount;
        } else {
            finalPrice = flowerPrice * quantity;
        }
    } else if (flower == 'Narcissus') {
        flowerPrice = 3;
        if (quantity < 120) {
            discount = 1.15;
            finalPrice = flowerPrice * quantity * discount;
        } else {
            finalPrice = flowerPrice * quantity;
        }
    } else if (flower == 'Gladiolus') {
        flowerPrice = 2.5;
        if (quantity < 80) {
            discount = 1.2;
            finalPrice = flowerPrice * quantity * discount;
        } else {
            finalPrice = flowerPrice * quantity;
        }
    }

    if (budget >= finalPrice) {
        console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${(budget - finalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(finalPrice - budget).toFixed(2)} leva more.`);
    }
}

newHouse(['Roses', '55', '250']);
// newHouse(['Tulips', '88', '260']);
// newHouse(['Narcissus', '119', '360']);
