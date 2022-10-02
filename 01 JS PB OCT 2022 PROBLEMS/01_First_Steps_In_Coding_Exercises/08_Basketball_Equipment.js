function basketballEquipment(input) {
    let annualFee = Number(input[0])

    let shoes = annualFee * 0.60
    let equip = shoes * 0.8
    let ball = equip * 0.25
    let accessoirs = ball * 0.2

    let totalCost = annualFee + shoes + equip + ball + accessoirs

    console.log(totalCost)

}

// basketballEquipment(["550"])