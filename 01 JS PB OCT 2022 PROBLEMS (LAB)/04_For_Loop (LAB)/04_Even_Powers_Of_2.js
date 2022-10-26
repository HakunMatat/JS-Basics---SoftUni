function evenPowersOf2(input) {
    let n = Number(input[0]);
    for (i = 1; ; i = Math.pow(i, n)) {
        console.log(i);
    }
}
evenPowersOf2(['3']);
