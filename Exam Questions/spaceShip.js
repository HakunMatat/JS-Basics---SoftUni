function spaceShip(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let average = Number(input[3]);

    let volumeRacket = width * length * height;
    let volumeRoom = (average + 0.4) * 2 * 2;
    let people = Math.floor(volumeRacket / volumeRoom);

    if (people >= 3 && people <= 10) {
        console.log('The spacecraft holds %d astronauts.', people);
    } else if (people < 3) {
        console.log('The spacecraft is too small.');
    } else if (people > 10) {
        console.log('The spacecraft is too big.');
    }
}

spaceShip(['3.5', '4', '5', '1.70']);
// spaceShip(['4.5', '4.8', '5', '1.75']);
