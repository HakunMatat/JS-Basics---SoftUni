// function timeMinutes(input) {
//   let hour = Number(input[0]);
//   let minutes = Number(input[1]);

//   let minutesPlus = minutes + 15;

//   if (minutesPlus >= 60) {
//     hour = hour + 1;
//     minutesPlus = minutesPlus - 60;

//     if (hour >= 24 && 0) {
//       hour = 0;
//     } else if ((hour = 0)) {
//       hour = 0;
//     }

//     if (minutesPlus < 10) {
//       console.log(`${hour}:0${minutesPlus}`);
//     } else {
//       console.log(`${hour}:${minutesPlus}`);
//     }
//   }
// }

function timeMinutes(input) {
  let hour = Number(input[0]);
  let minutes = Number(input[1]);
  let minutesPlus = minutes + 15;

  if (minutesPlus >= 60) {
    hour = hour + 1;
    minutesPlus = minutesPlus - 60;
  }

  if (hour > 23) {
    hour = 0;
    //   } else if ((hour = 0)) {
    //     //     hour = 0;
    //   } else if ((hour = 0)) {
    //     hour = 0;
  }

  if (minutesPlus < 10) {
    console.log(`${hour}:0${minutesPlus}`);
  } else {
    console.log(`${hour}:${minutesPlus}`);
  }
}

// timeMinutes(["1", "46"]); // 2:01 V
// timeMinutes(["0", "01"]); // 0:16 V
// timeMinutes(["23", "59"]); // 00:14 V
timeMinutes(["11", "08"]); // 11:23 V
// timeMinutes(["12", "49"]); // 13:04 V
