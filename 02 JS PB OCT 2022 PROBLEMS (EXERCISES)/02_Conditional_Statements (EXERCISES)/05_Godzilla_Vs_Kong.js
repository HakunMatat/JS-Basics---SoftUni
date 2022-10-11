function godzillaVsKong(input) {
    let movieBudget = Number(input[0]);
    let actors = Number(input[1]);
    let clothes = Number(input[2]);
    let costDecoration = movieBudget * 0.1;
    let costClothes = clothes * actors;

    if (actors > 150) {
        costClothes *= 0.9;
    }

    let totalMovieCost = costDecoration + costClothes;
    // let moneyLeft = movieBudget - totalMovieCost;

    // console.log(costDecoration, costClothes, totalMovieCost, moneyLeft);

    if (movieBudget >= totalMovieCost) {
        console.log(`Action!\nWingard starts filming with ${(movieBudget - totalMovieCost).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money!\nWingard needs ${(totalMovieCost - movieBudget).toFixed(2)} leva more.`);
    }
}

godzillaVsKong(['20000', '120', '55.5']);
// godzillaVsKong(['15437.62', '186', '57.99']);
// godzillaVsKong(['9587.88', '222', '55.68']);

// if (totalIncome >= vacationCost) {
//     console.log(`Yes! ${(totalIncome - vacationCost).toFixed(2)} lv left.`);
// } else {
//     console.log(`Not enough money! ${(vacationCost - totalIncome).toFixed(2)} lv needed.`);
// }
