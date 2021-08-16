class Car {
  constructor(year, brand, model) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  presentation() {
    console.log(`En ${this.year} ${this.brand} ${this.model}`);
  }
}

module.exports = Car;
