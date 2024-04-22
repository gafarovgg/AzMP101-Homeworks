// class Vehicle {
//   constructor(color, year) {
//     this.color = color;
//     this.year = year;
//   }
// }
// class Car extends Vehicle {
//   constructor(
//     color,
//     year,
//     brand,
//     model,
//     fuelCapacity,
//     fuelFor1Km,
//     currentFuel,
//     km
//   ) {
//     super(color, year);
//     this.brand = brand;
//     this.model = model;
//     this.fuelCapacity = fuelCapacity;
//     this.fuelFor1Km = fuelFor1Km;
//     this.currentFuel = currentFuel;
//     this.km = km;
//   }
//   showInfo = function () {
//     return `brand:${this.brand} \nmodel:${this.model} \nyear:${this.year} \ncolor:${this.color} \nkm:${this.km} \nCurrentFuel:${this.currentFuel}`;
//   };
//   drive = function (distance) {
//     if (distance * this.fuelFor1Km < this.currentFuel) {
//       this.km += distance;
//       this.currentFuel -= distance * this.fuelFor1Km;
//       return `mesafe qeth edildi.\nProbeq:${this.km} km \nHal-hazirdaki yanacag:${this.currentFuel} L`;
//     } else {
//       return `bakda yeteri qeder yanacag yoxdur`;
//     }
//   };
//   addFuel = function (l) {
//     if (l + this.currentFuel > this.fuelCapacity) {
//       return `bu qeder benzin alina bilmez`;
//     } else {
//       this.currentFuel += l;
//       return `Baka elave olunan benzin miqdarı ${l} L\nBakda olan hal-hazirdaki benzin:${this.currentFuel}L`;
//     }
//   };
//   changeMusic = function (musicName) {
//     return `Yutubdan qoshdum \nmahnı : ${musicName}`;
//   };
// }

// const m3 = new Car("blue", 2015, "BMW", "M3", 60, 0.2, 45, 25000);

// console.log(m3.showInfo());
// console.log(m3.changeMusic("Muzikalni Meyxana"));
// console.log(m3.drive(200));
// console.log(m3.showInfo());
// console.log(m3.addFuel(55));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class Product {
//   constructor(name, price, count, totalIncome) {
//     this.name = name;
//     this.price = price;
//     this.count = count;
//     this.totalIncome = totalIncome;
//   }
//   Sell = function (quantity) {
//     if (this.count >= quantity) {
//       this.count -= quantity;
//       this.totalIncome += this.price * quantity;
//       return `${quantity} ədəd ${this.name} satıldı.`;
//     } else {
//       return `${this.name} üçün kifayət qədər məhsul yoxdur.`;
//     }
//   };
// }

// class Milk extends Product {
//   constructor(name, price, count, totalIncome, volume, fatRate) {
//     super(name, price, count, totalIncome);
//     this.volume = volume;
//     this.fatRate = fatRate;
//   }
// }

// const Süd = new Product("Süd", 3, 30, 1000);
// const Palsud = new Milk("Palsud", 2, 15, 200, 2, 0.5);
// console.log(Palsud);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Group {
  constructor(no, limit, students) {
    this.no = no;
    this.limit = limit;
    this.students = students;
  }
  addStudent = function () {};
  getStudents = function () {
    return `Şagirdlərin sayı:${this.students}`;
  };
}

const salam = new Group("AZMP101", 40, 30);
console.log(salam.getStudents());
