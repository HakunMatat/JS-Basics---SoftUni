function christmasGifts(input) {
    let i = 0;
    let command = Number(input[i]);
    let priceToy = 5.0;
    let priceDress = 15.0;

    let kids = 0;
    let notKids = 0;

    let exitMsg = 'Christmas';

    while (command != exitMsg) {
        if (command == exitMsg) {
            break;
        }
        command = input[i];
        i++;
        if (command <= 16) {
            kids++;
        } else if (command > 16) {
            notKids++;
        }
    }
    let moneyForKids = kids * priceToy;
    let moneyForAdults = notKids * priceDress;

    console.log(`Number of adults: ${notKids}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${moneyForKids}`);
    console.log(`Money for sweaters: ${moneyForAdults}`);
}

christmasGifts(['16', '20', '46', '12', '8', '20', '49', 'Christmas']);
