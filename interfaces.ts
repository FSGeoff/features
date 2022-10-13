interface Reportable {
   summary(): string;
}

const oldCivic = {
    name: 'Civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return 'Name: ${this.name}';
    }
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }

};

const printVehicle = (vehicle: Reportable): void => {
    console.log(vehicle.summary());
};

printVehicle(oldCivic);

interface Reportable {
    summary(): string;
}

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

//Both oldCivic and drink can use the printSummary method as both are of the interface
printSummary(oldCivic);
printSummary(drink);