function sumSeconds(a) {
    firstNumber = Number(a[0]);
    secondNumber = Number(a[1]);
    thirdNumber = Number(a[2]);
    let totalTime = firstNumber + secondNumber + thirdNumber;
    // console.log(totalTime);
    let minutes = Math.floor(totalTime / 60); // 2

    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds(['35', '45', '44']);
// sumSeconds(['22', '7', '34']);
// sumSeconds(['50', '50', '49']);
// sumSeconds(['14', '12', '10']);
