//Generics

class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}

    get(index: number): T {
        return this.collection[index];
    }

}
 const arr = new ArrayOfAnything(['a','b','c']);

//Example of Generics w/functions

function printStrings(arr: string[]): void {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};
function printNumbers(arr: number []): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};
//Generic Function
function printAnything<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};
//Generic Function call
printAnything<string>(['Dad','Iniko','Inity']);
//Type inference will allow the function call to work
//even when to 'T' is given
printAnything([2,4,7,2]);

//Generic Constraints

class Car {
    print() {
        console.log(" I am a car");
    }
}

class House {
    print() {
        console.log(" I am a house");
    }
}

//Generic Function with Constraints
interface Printable {
    print(): void;
}
//T extends the interface above
function printHousesOrCars<T extends Printable>(arr: T []): void {
    for (let i = 0; 1< arr.length; i++) {
        arr[i].print();
    }
}
//Allowable via type inference / Satisfies the interface
printHousesOrCars([new House(), new House()]);

//Type annotation
printHousesOrCars<Car>([new Car(), new Car()]);