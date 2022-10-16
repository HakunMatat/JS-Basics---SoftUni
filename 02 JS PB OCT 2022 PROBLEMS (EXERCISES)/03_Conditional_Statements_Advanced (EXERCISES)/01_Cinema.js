function cinema(input) {
    const projection = input[0];
    const rows = input[1];
    const columns = input[2];

    let income = 0;

    if (projection == 'Premiere') {
        income = rows * columns * 12;
    } else if (projection == 'Normal') {
        income = rows * columns * 7.5;
    } else if (projection == 'Discount') {
        income = rows * columns * 5;
    }

    console.log(`${income.toFixed(2)} leva`);
}

cinema(['Premiere', '10', '12']);
cinema(['Normal', '21', '13']);
cinema(['Discount', '12', '30']);
