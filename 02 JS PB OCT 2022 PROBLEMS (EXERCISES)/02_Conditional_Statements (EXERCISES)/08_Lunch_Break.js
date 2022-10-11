function lunchBreak(index) {
    let movieName = index[0];
    let movieLenght = Number(index[1]);
    let movieBreak = Number(index[2]);

    let timeLeft = movieBreak - movieBreak * (1 / 8) - movieBreak * (1 / 4);
    // console.log(timeLeft);

    if (movieLenght <= timeLeft) {
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(timeLeft - movieLenght)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(movieLenght - timeLeft)} more minutes.`);
    }
}

lunchBreak(['Game of Thrones', '60', '96']);
// lunchBreak(['Teen Wolf', '48', '60']);
