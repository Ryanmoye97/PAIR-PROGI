class car {
    constructor(make, model, year, milage, color) {

        this.make = make;
        this.model = model;
        this.year = year;
        this.milage = milage;
        this.color = color;
    }

    driveToWork() {
        console.log(this.milage + 33)
    }

    driveAroundTheWorld() {
        console.log(this.milage + 24000)
    }

    runErrands() {
        console.log(this.milage + 30)
    }


}

const car1 = new car("Mazda", "MX-5", "1995", 2000, "red")

console.log(car1)

console.log(car1.driveAroundTheWorld())