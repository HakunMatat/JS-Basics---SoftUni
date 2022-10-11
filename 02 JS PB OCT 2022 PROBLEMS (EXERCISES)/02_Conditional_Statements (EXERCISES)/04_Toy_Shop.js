function toyShop(index) {
    let moneyAvailable = Number(index[0]);
    let totalPuzzles = Number(index[1]);
    let totalTalkingDolls = Number(index[2]);
    let totalTeddyBears = Number(index[3]);
    let totalMinions = Number(index[4]);
    let totalToyTrucks = Number(index[5]);
    let rent = 0.9;

    let costPuzzles = 2.6;
    let costTalkingDolls = 3;
    let costTeddyBears = 4.1;
    let costMinions = 8.2;
    let costToyTruck = 2;

    let totalAmountToys = Number(index[1]) + Number(index[2]) + Number(index[3]) + Number(index[4]) + Number(index[5]);

    let totalPriceEarned =
        totalPuzzles * costPuzzles +
        totalTalkingDolls * costTalkingDolls +
        totalTeddyBears * costTeddyBears +
        totalMinions * costMinions +
        totalToyTrucks * costToyTruck;

    if (totalAmountToys >= 50) {
        totalPriceEarned = totalPriceEarned * 0.75;
    }

    totalPriceEarned = totalPriceEarned * rent;

    if (moneyAvailable < totalPriceEarned) {
        totalPriceEarned = totalPriceEarned - moneyAvailable;
        console.log(`Yes! ${totalPriceEarned.toFixed(2)} lv left.`);
    } else if (moneyAvailable > totalPriceEarned) {
        totalPriceEarned = moneyAvailable - totalPriceEarned;
        console.log(`Not enough money! ${totalPriceEarned.toFixed(2)} lv needed.`);
    }
}

// toyShop(['40.8', '20', '25', '30', '50', '10']);
toyShop(['320', '8', '2', '5', '5', '1']);

// Teacher's Way

function toyShop(input) {
    let puzzleCost = 2.6;
    let dollCost = 3;
    let teddyBearCost = 4.1;
    let minionCost = 8.2;
    let carCost = 2;

    let vacationCost = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let teddyBearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let carsCount = Number(input[5]);

    let totalIncome =
        puzzleCost * puzzleCount +
        dollCost * dollCount +
        teddyBearCost * teddyBearsCount +
        minionCost * minionsCount +
        carCost * carsCount;

    if (puzzleCount + dollCount + teddyBearsCount + minionsCount + carsCount >= 50) {
        totalIncome *= 0.75;
    }

    totalIncome *= 0.9;

    if (totalIncome >= vacationCost) {
        console.log(`Yes! ${(totalIncome - vacationCost).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(vacationCost - totalIncome).toFixed(2)} lv needed.`);
    }
}
