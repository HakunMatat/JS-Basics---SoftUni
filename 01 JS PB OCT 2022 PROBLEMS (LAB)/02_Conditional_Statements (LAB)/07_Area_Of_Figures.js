function areasOfFigures(input) {
    let figure = String(input[0]);
    let side1 = Number(input[1]);
    let side2 = Number(input[2]);

    if (figure === 'square') {
        console.log(side1 * side1);
    } else if (figure === 'rectangle') {
        console.log(side1 * side2);
    } else if (figure === 'circle') {
        console.log(side1 ** 2 * Math.PI);
    } else if (figure === 'triangle') {
        console.log((side1 * side2) / 2);
    }
}

// areasOfFigures(["square", "5"]);
// areasOfFigures(["rectangle", "7", "2.5"]);
// areasOfFigures(["circle", "6"]);
// areasOfFigures(["triangle", "4.5", "20"]);
