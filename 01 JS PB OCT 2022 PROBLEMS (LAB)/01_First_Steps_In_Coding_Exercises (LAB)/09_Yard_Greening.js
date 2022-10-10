function yardGreening(i) {
    let pricePerSquareMeter = 7.61;
    let discount = 18 / 100;

    let yardPriceBeforeDiscount = Number(i[0]) * pricePerSquareMeter;
    let yardDiscount = yardPriceBeforeDiscount * discount;
    let totalPrice = yardPriceBeforeDiscount - yardDiscount;

    console.log(`The final price is: ${totalPrice} lv.`);
    console.log(`The discount is: ${yardDiscount} lv.`);
}

yardGreening(['550']);

/*
•	"The final price is: {крайна цена на услугата} lv."
•	"The discount is: {отстъпка} lv."
*/
