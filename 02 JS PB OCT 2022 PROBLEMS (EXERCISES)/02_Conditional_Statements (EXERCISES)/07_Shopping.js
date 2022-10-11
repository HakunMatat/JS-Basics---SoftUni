function shopping(index) {
    let budget = Number(index[0]);
    let videoCardCount = Number(index[1]);
    let videoCardPrice = 250 * videoCardCount;
    let processorCount = Number(index[2]);
    let processorPrice = videoCardPrice * 0.35;
    let ramCount = Number(index[3]);
    let ramPrice = videoCardPrice * 0.1;

    let totalPrice = videoCardPrice + processorCount * processorPrice + ramCount * ramPrice;

    if (videoCardCount > processorCount) {
        totalPrice *= 0.85;
    }

    if (budget >= totalPrice) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }
}

// shopping(['900', '2', '1', '3']);
shopping(['920.45', '3', '1', '1']);
