function giftsFromSanta(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let s = Number(input[2]);
    let num = Number(input[0]);
    let arr = [];

    for (let i = m; i >= n; i--) {
        if (i % 2 === 0 && i % 3 === 0) {
            let adress = Number(input[i]);
            if (i === s) {
                break;
            }
            arr.push(i);
        }
    }
    console.log(arr.join(' '));
}

// giftsFromSanta(['20', '1000', '36']);
giftsFromSanta(['1', '36', '12']);
