function petShop(i) {
    let dogFood = 2.5;
    let catFood = 4;

    let totalDogFoodPrice = Number(i[0]) * dogFood;
    let totalCatFoodPrice = Number(i[1]) * catFood;

    let totalPrice = totalCatFoodPrice + totalDogFoodPrice;

    console.log(totalPrice);
}

// petShop(["5", "4"])
// petShop(["13", "9"])
