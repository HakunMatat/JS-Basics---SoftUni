function usdToBgn(input) {
    let usd = Number(input[0]);
    let bgn = (usd * 180) / Math.PI;

    console.log(bgn);
}
