function sumNumber(input) {
    let index = 0;
    let num = Number(input[index]);
    index++;

    let currentNum = Number(input[index]);
    index++;

    let sum = 0;

    while (sum < num) {
        sum += currentNum;
        currentNum = Number(input[index]);
        index++;
    }
    console.log(sum);
}

sumNumber(['100', '10', '20', '30', '40']);
// sumNumber(['20', '1', '2', '3', '4', '5', '6']);
