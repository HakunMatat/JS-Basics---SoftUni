function bonusScore(index) {
    let score = Number(index[0]);
    let bonus = 0;

    if (score <= 100) {
        bonus += 5;
    } else if (score > 100 && score < 1000) {
        bonus = score * 0.2;
    } else if (score > 1000) {
        bonus = score * 0.1;
    }

    if (score % 2 === 0) {
        bonus += 1;
    } else if (score % 10 === 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(score + bonus);
}

// bonusScore(['20']); // 26
// bonusScore(['175']); //211
// bonusScore(['2703']); //3243.6
bonusScore(['15875']); // 19051
