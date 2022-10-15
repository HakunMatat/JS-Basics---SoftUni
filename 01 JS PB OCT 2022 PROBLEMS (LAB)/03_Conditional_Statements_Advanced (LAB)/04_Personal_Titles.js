function personalTitles(input) {
    const sex = String(input[1]);
    const age = Number(input[0]);
    // console.log(sex, age);

    if (age >= 16 && sex == 'm') {
        console.log('Mr.');
    } else if (age >= 16 && sex == 'f') {
        console.log('Ms.');
    } else if (age < 16 && sex == 'f') {
        console.log('Miss');
    } else if (age < 16 && sex == 'm') {
        console.log('Master');
    }
}
// personalTitles(['12', 'f']);
// personalTitles(['17', 'm']);
// personalTitles(["25", "f"])
personalTitles(['13.5', 'm']);
