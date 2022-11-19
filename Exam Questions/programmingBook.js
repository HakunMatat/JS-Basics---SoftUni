function programingBook(input) {
    let priceForOnePage = Number(input[0]);
    let priceForOneCover = Number(input[1]);
    let priceForPrint = 1 - Number(input[2]) / 100;
    let priceForDesigner = Number(input[3]);
    let procentTotalPayment = 1 - Number(input[4]) / 100;
    let pages = 899;
    let covers = 2;

    let firstPriceForPrint = pages * priceForOnePage + covers * priceForOneCover;
    let priceAfterDiscount = firstPriceForPrint * priceForPrint;

    let costForDesigner = priceAfterDiscount + priceForDesigner;
    let totalAmount = costForDesigner * procentTotalPayment;

    console.log(`Avtonom should pay ${totalAmount.toFixed(2)} BGN.`);
}
