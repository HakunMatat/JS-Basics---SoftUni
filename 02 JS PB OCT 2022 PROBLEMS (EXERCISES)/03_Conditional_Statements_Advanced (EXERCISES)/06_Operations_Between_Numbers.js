function operationsBetweenNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let evenOrOdd;
    // +
    if (operator == '+') {
        result = num1 + num2;

        if (result % 2 == 0) {
            evenOrOdd = 'even';
        } else {
            evenOrOdd = 'odd';
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
        // -
    } else if (operator == '-') {
        result = num1 - num2;
        if (result % 2 == 0) {
            evenOrOdd = 'even';
        } else {
            evenOrOdd = 'odd';
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
        // *
    } else if (operator == '*') {
        result = num1 * num2;
        if (result % 2 == 0) {
            evenOrOdd = 'even';
        } else {
            evenOrOdd = 'odd';
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
        // /
    } else if (operator == '/') {
        if (num2 != 0) {
            result = num1 / num2;
            console.log(`${num1} ${operator} ${num2} = ${result.toFixed(2)}`);
        } else {
            console.log(`Cannot divide ${num1} by zero`);
        }

        // %
    } else if (operator == '%') {
        if (num2 != 0) {
            result = num1 % num2;
            console.log(`${num1} ${operator} ${num2} = ${result}`);
        } else {
            console.log(`Cannot divide ${num1} by zero`);
        }
    }
}

// operationsBetweenNumbers(['10', '12', '+']);
// operationsBetweenNumbers(['123', '12', '/']);
// operationsBetweenNumbers(['112', '0', '/']);
// operationsBetweenNumbers(['10', '1', '-']);
// operationsBetweenNumbers(['10', '3', '%']);
// operationsBetweenNumbers(['10', '0', '%']);
operationsBetweenNumbers(['7', '3', '*']);
