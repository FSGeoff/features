class Vehicle {
    constructor(public color: string) {
    }
    protected honk(): void {
        console.log(`Beep Beep! Who got the keys to the Jeep?!`);
    }
};

class Car extends Vehicle {
    constructor(public  wheels: number, color: string) {
        super(color);
    }

     private drive(): void {
        console.log(`VROOM! VROOM! VROOM!`);
    }
    startTheDrivingProcess(): void {
         this.drive();
         //available from parent class as a protected method
         this.honk();
    }
};

const vehicle = new Vehicle('green');
//protected - can only be called by class and child class
//vehicle.honk();
console.log(vehicle.color);

const car = new Car(4, 'blue');
//protected - can only be called by class and child class
//car.honk();
car.startTheDrivingProcess();
