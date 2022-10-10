function wholeNumber(input) {
    let num = Number(input);

    if (num < 100) {
        console.log('Less than 100');
    } else if (100 <= num && num <= 200) {
        console.log('Between 100 and 200');
    } else {
        console.log('Greater than 200');
    }
}

wholeNumber(['95']);
// wholeNumber(["120"]);
// wholeNumber(["210"]);
