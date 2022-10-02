function fishTank(input) {
    let lenght = Number(input[0])
    let depth = Number(input[1])
    let height = Number(input[2])
    let percentage = Number(input[3]) / 100

    let volumeInSquareCentimeters = lenght * depth * height
    let volumeInLiters = volumeInSquareCentimeters / 1000
    let usedSpace = volumeInLiters * (1 - percentage)

    console.log(usedSpace)

}

fishTank(["85","75","47","17"])