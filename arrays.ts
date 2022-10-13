//Type inference detects a string
const carMakers = ['Bentley', 'Mercedes', 'BMW'];

//Must be annotated if array is initially set to be empty
const cars: string[] = [];

const dates =[new Date(), new Date()];

//Inference
const carsByMake = [
    ['Azure'],
    ['S550'],
    ['750i']
];

//Annotation
const autosByMake: string [] [] = [];

//Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
// WILL THROW AN ERROR AS ITS EXPECTING A STRING
// carMakers.push(100);

//Help with 'map'
carMakers.map((car: string): string => {
 return car.toLocaleUpperCase();
});

//Arrays can contain multiple different types
//Inference
const importantDates =[new Date(), '06-04-1969'];
importantDates.push('05-08-2014');

//Annotation
const vitalDates:(Date | string) [] = [];
vitalDates.push(new Date());
