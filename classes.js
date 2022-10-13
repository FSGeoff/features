var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(color) {
        this.color = color;
    }
    Vehicle.prototype.honk = function () {
        console.log("Beep Beep! Who got the keys to the Jeep?!");
    };
    return Vehicle;
}());
;
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(wheels, color) {
        var _this = _super.call(this, color) || this;
        _this.wheels = wheels;
        return _this;
    }
    Car.prototype.drive = function () {
        console.log("VROOM! VROOM! VROOM!");
    };
    Car.prototype.startTheDrivingProcess = function () {
        this.drive();
        //available from parent class as a protected method
        this.honk();
    };
    return Car;
}(Vehicle));
;
var vehicle = new Vehicle('green');
//protected - can only be called by class and child class
//vehicle.honk();
console.log(vehicle.color);
var car = new Car(4, 'blue');
//protected - can only be called by class and child class
//car.honk();
car.startTheDrivingProcess();
//# sourceMappingURL=classes.js.map