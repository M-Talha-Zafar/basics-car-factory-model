// CarFactory as a singleton function
const CarFactory = (() => {
  let instance = null;
  const createdCars = [];

  function createCar(
    seats = { material: "Leather", color: "Black" },
    engine = { horsepower: 150 },
    doors = { number: 4 },
    multimedia = { screenSize: 10 },
    suspension = { type_: "Independent" },
    electricalSystem = { voltage: 12 }
  ) {
    const car = {
      seats,
      engine,
      doors,
      multimedia,
      suspension,
      electricalSystem,
    };
    createdCars.push(car);
    return car;
  }

  function getAllCars() {
    return createdCars;
  }

  function getTotalCarCount() {
    return createdCars.length;
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = {
          createCar,
          getAllCars,
          getTotalCarCount,
        };
      }
      return instance;
    },
  };
})();

const carFactory = CarFactory.getInstance();

const car1 = carFactory.createCar();
const car2 = carFactory.createCar();

const customSeats = { material: "Cloth", color: "Grey" };
const customEngine = { horsepower: 200 };
const customDoors = { number: 2 };
const customMultimedia = { screenSize: 12 };
const customSuspension = { type_: "Sports" };
const customElectricalSystem = { voltage: 24 };

const car3 = carFactory.createCar(
  customSeats,
  customEngine,
  customDoors,
  customMultimedia,
  customSuspension,
  customElectricalSystem
);

const allCars = carFactory.getAllCars();

for (let i = 0; i < allCars.length; i++) {
  console.log(`Car ${i + 1}:`);
  console.log(
    `Seats: Material - ${allCars[i].seats.material}, Color - ${allCars[i].seats.color}`
  );
  console.log(`Engine: Horsepower - ${allCars[i].engine.horsepower}`);
  console.log(`Doors: Number - ${allCars[i].doors.number}`);
  console.log(`Multimedia: Screen Size - ${allCars[i].multimedia.screenSize}`);
  console.log(`Suspension: Type - ${allCars[i].suspension.type_}`);
  console.log(
    `Electrical System: Voltage - ${allCars[i].electricalSystem.voltage}`
  );
  console.log("-----------------------");
}

const totalCarCount = carFactory.getTotalCarCount();
console.log(`Total Cars Produced: ${totalCarCount}`);
