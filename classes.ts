class Vehicle {
    protected honk(): void {
        console.log(`Beep Beep! Who got the keys to the Jeep?!`);
    }
};

class Car extends Vehicle {
     private drive(): void {
        console.log(`VROOM! VROOM! VROOM!`);
    }
    startTheDrivingProcess(): void {
         this.drive();
         //available from parent class as a protected method
         this.honk();
    }
};

const vehicle = new Vehicle();
//protected - can only be called by class and child class
//vehicle.honk();

const car = new Car();
//protected - can only be called by class and child class
//car.honk();
car.startTheDrivingProcess();
