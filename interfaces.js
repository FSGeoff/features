var oldCivic = {
    name: 'Civic',
    year: new Date(),
    broken: true,
    summary: function () {
        return 'Name: ${this.name}';
    }
};
var drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary: function () {
        return "My drink has " + this.sugar + " grams of sugar";
    }
};
var printVehicle = function (vehicle) {
    console.log(vehicle.summary());
};
printVehicle(oldCivic);
var printSummary = function (item) {
    console.log(item.summary());
};
//Both oldCivic and drink can use the printSummary method as both are of the interface
printSummary(oldCivic);
printSummary(drink);
//# sourceMappingURL=interfaces.js.map