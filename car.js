/*
  list accessed from array
*/

const car = {
  brand: {
    name: "Opel",
    from: "Norway"
  },
  running: true,
  gear: ["Neutral", "First", "Second", "Third"],
  
  gear_ratio: function(speed) {
    let gearType = typeof speed;
    
    if (gearType !== "number") {
      console.log("Please type in a nummerical value.")
    } else if (speed === 0) {
      console.log(car.gear[0] + ": " + speed);
    } else if (speed >= 1 && speed <= 10) {
      console.log(car.gear[1] + ": " + speed);
    } else if (speed >= 11 && speed <= 30) {
      console.log(car.gear[2] + ": " + speed);
    } else if (speed >= 31 && speed <= 50) {
      console.log(car.gear[3] + ": " + speed);
    } else {
      console.log("Invalid value");
    }

    return speed;
  }
}

let speedRatio = car.gear_ratio(25);