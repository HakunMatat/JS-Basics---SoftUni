function invalidNumber(input) {
    const number = Number(input[0]);
    //100 - 200 || 0
    // console.log(number);
    let isValid = (number >= 100 && number <= 200) || number === 0;

    if (!isValid) {
        console.log('invalid');
    } else {
    }
}

// invalidNumber(['75']); // Invalid
// invalidNumber(['150']); // n/a
// invalidNumber(['220']); // Invalid
// invalidNumber(['199']); // n/a
// invalidNumber(['-1']); // Invalid
// invalidNumber(['100']); // n/a
// invalidNumber(['200']); // n/a
invalidNumber(['0']); // n/a
