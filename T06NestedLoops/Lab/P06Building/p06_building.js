function building(input) {
    let numberOfFloors = Number(input[0]);
    let numberOfRoomsOnEachFloor = Number(input[1]);

    for (let floor = numberOfFloors; floor > 0; floor--) {
        let output = "";
        for (let room = 0; room < numberOfRoomsOnEachFloor; room++) {
            let typeOfRoom = "A";

            if (floor === numberOfFloors) {
                typeOfRoom = "L";
            } else if (floor % 2 == 0) {
                typeOfRoom = "O";
            }
            output += `${typeOfRoom}${floor}${room} `
        }
        console.log(output);
    }
}

building(["6", "4"]);
console.log("-------------------------");
building(["9", "5"]);
console.log("-------------------------");
building(["4", "4"]);
