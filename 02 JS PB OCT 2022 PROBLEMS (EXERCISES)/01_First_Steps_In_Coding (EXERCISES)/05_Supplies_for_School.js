function learningMaterials(input) {

    let pricePerPackagePens = 5.8
    let pricePerPackageMarkers = 7.2
    let pricePerChemical = 1.2

    let totalPens = Number(input[0]) * pricePerPackagePens
    let totalMarkers = Number(input[1]) * pricePerPackageMarkers
    let totalChemicals = Number(input[2]) * pricePerChemical
    let discount = Number(input[3]) / 100

    let totalAmount = totalPens + totalMarkers + totalChemicals
    let totalAmounts = totalAmount - (totalAmount * discount)
    
    console.log(totalAmounts)

}

// learningMaterials(["2","3","4","25"])