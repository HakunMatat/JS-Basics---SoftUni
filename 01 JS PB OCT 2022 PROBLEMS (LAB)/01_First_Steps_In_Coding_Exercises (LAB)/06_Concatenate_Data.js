function concatenateData(input) {
    let firstName = input[0];
    let surName = input[1];
    let age = Number(input[2]);
    let town = input[3];

    console.log(
        `You are ${firstName} ${surName}, a ${age}-years old person from ${town}.`
    );
}

concatenateData(['Maria', 'Ivanova', 20, 'Sofia']);

// "You are <firstName> <lastName>, a <age>-years old person from <town>."
