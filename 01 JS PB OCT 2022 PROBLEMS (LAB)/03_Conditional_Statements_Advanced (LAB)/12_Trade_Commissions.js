function tradeCommissions(input) {
    const town = input[0];
    const volume = Number(input[1]);

    if (town == 'Sofia') {
        if ((0 <= volume) & (volume <= 500)) {
            console.log(`${(volume * 0.05).toFixed(2)}`);
        } else if (500 < volume && volume <= 1000) {
            console.log(`${(volume * 0.07).toFixed(2)}`);
        } else if (1000 < volume && volume <= 10000) {
            console.log(`${(volume * 0.08).toFixed(2)}`);
        } else if (volume > 10000) {
            console.log(`${(volume * 0.12).toFixed(2)}`);
        } else if (volume <= 0) {
            console.log(`error`);
        }
    } else if (town == 'Varna') {
        if ((0 <= volume) & (volume <= 500)) {
            console.log(`${(volume * 0.045).toFixed(2)}`);
        } else if (500 < volume && volume <= 1000) {
            console.log(`${(volume * 0.075).toFixed(2)}`);
        } else if (1000 < volume && volume <= 10000) {
            console.log(`${(volume * 0.1).toFixed(2)}`);
        } else if (volume > 10000) {
            console.log(`${(volume * 0.13).toFixed(2)}`);
        } else if (volume <= 0) {
            console.log(`error`);
        }
    } else if (town == 'Plovdiv') {
        if ((0 <= volume) & (volume <= 500)) {
            console.log(`${(volume * 0.055).toFixed(2)}`);
        } else if (500 < volume && volume <= 1000) {
            console.log(`${(volume * 0.08).toFixed(2)}`);
        } else if (1000 < volume && volume <= 10000) {
            console.log(`${(volume * 0.12).toFixed(2)}`);
        } else if (volume > 10000) {
            console.log(`${(volume * 0.145).toFixed(2)}`);
        } else if (volume <= 0) {
            console.log(`error`);
        }
    } else {
        console.log(`error`);
    }
}

tradeCommissions(['Sofia', '1500']);
tradeCommissions(['Plovdiv', '499.99']);
tradeCommissions(['Varna', '3874.50']);
tradeCommissions(['Kaspichan', '-50']);
