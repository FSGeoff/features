//Type inference detects a string
var carMakers = ['Bentley', 'Mercedes', 'BMW'];
//Must be annotated if array is initially set to be empty
var cars = [];
var dates = [new Date(), new Date()];
//Inference
var carsByMake = [
    ['Azure'],
    ['S550'],
    ['750i']
];
//Annotation
var autosByMake = [];
//Help with inference when extracting values
var car = carMakers[0];
var myCar = carMakers.pop();
//Prevent incompatible values
// WILL THROW AN ERROR AS ITS EXPECTING A STRING
// carMakers.push(100);
//Help with 'map'
carMakers.map(function (car) {
    return car.toLocaleUpperCase();
});
//Arrays can contain multiple different types
//Inference
var importantDates = [new Date(), '06-04-1969'];
importantDates.push('05-08-2014');
//Annotation
var vitalDates = [];
vitalDates.push(new Date());
//# sourceMappingURL=arrays.js.map