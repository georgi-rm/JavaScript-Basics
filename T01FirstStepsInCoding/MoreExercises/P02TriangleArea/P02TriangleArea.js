function TriangleArea(input){
    let a = Number(input[0]);
    let h = Number(input[1]);

    let area = a * h / 2;
    console.log(area.toFixed(2));
}

TriangleArea(["20", "30"])
TriangleArea(["15", "35"])
TriangleArea(["7.75", "8.45"])
TriangleArea(["1.23456", "4.56789"])
