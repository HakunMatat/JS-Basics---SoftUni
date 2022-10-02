function depositCalculaor(input) {
  let depositAmount = Number(input[0]); // 200
  let depositMonths = Number(input[1]); // 3
  let interestRate = Number(input[2]) / 100; //0.057

  let finalAmount =
    depositAmount + depositMonths * ((depositAmount * interestRate) / 12);

  console.log(finalAmount);
}

depositCalculaor(["200", "3", "5.7"]);
