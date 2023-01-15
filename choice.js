/*
  list accessed from array
*/

const car = {
  brand: "Opel",
  speed: 0,
  start: false,
  gear: ["neutral", "first", "second", "third"],
  ignition: function() {
    car.start = !car.start;
  }
}
