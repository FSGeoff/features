//Generics
var ArrayOfAnything = /** @class */ (function () {
    function ArrayOfAnything(collection) {
        this.collection = collection;
    }
    ArrayOfAnything.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfAnything;
}());
var arr = new ArrayOfAnything(['a', 'b', 'c']);
//Example of Generics w/functions
function printStrings(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
;
function printNumbers(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
;
//Generic Function
function printAnything(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
;
//Generic Function call
printAnything(['Dad', 'Iniko', 'Inity']);
//Type inference will allow the function call to work
//even when to 'T' is given
printAnything([2, 4, 7, 2]);
//Generic Constraints
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.print = function () {
        console.log(" I am a car");
    };
    return Car;
}());
var House = /** @class */ (function () {
    function House() {
    }
    House.prototype.print = function () {
        console.log(" I am a house");
    };
    return House;
}());
//T extends the interface above
function printHousesOrCars(arr) {
    for (var i = 0; 1 < arr.length; i++) {
        arr[i].print();
    }
}
//Allowable via type inference / Satisfies the interface
printHousesOrCars([new House(), new House()]);
//Type annotation
printHousesOrCars([new Car(), new Car()]);
//# sourceMappingURL=generics.js.map