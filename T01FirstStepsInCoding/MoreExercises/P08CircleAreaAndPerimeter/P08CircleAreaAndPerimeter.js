function CircleAreaAndPerimeter(input) {
    let radius = Number(input[0]);

    let area = radius * radius * Math.PI;
    let perimeter = radius * 2 * Math.PI;
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

CircleAreaAndPerimeter(["3"]);
CircleAreaAndPerimeter(["4.5"]);