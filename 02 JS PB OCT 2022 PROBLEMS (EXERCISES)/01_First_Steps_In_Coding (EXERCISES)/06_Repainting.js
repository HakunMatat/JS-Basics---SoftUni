function Repaiting(input) {
    let protectiveNaylonPerSquareMeter = 1.5;
    let paintPerLiter = 14.5;
    let desolvingPaintPerLiter = 5;
    let bagCost = 0.4;
    let workerCostInPercentage = 0.3;
    let squareMeters = 2;
    let rumenRequirment = 1.1;

    // Total Cost of Materials
    let totalSumNaylon =
        (Number(input[0]) + squareMeters) * protectiveNaylonPerSquareMeter; // 18
    let totalSumPaint = Number(input[1]) * rumenRequirment * paintPerLiter;
    let totalSumDesolvingPaint = Number(input[2]) * desolvingPaintPerLiter;

    let totalCostOfMaterials =
        totalSumNaylon + totalSumPaint + totalSumDesolvingPaint + bagCost;

    // Total Cost Of Workers

    let amountOfWorkers = Number(input[3]);
    let totalCostForWorkers =
        totalCostOfMaterials * workerCostInPercentage * amountOfWorkers;

    let totalCost = totalCostForWorkers + totalCostOfMaterials;
    console.log(totalCost);
}

// Repaiting(["10","11","4","8"])
