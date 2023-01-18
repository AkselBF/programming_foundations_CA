/*
  list accessed from array
*/

const car = {

  // Nested object
  brand: {
    name: "Opel",
    from: "Norway"
  },
  running: true, // boolean
  gear: ["Neutral", "First", "Second", "Third"], // array
  
  gear_ratio: function(speed) {
    let gearType = typeof speed;
    
    if (gearType !== "number") { // Checking if the speed value is a number
      console.log("Please type in a nummerical value.")
    } else if (speed === 0) { // Using the "gear" array to log out the respective value
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

// type any number between 0 and 50 in "car.gear_ratio()" to get a "gear" value
let speedRatio = car.gear_ratio(25);
