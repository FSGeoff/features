const profile = {
    name: 'Geoff',
    age: 53,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};

//Destructuring
const {age}: {age: number, name: string} = profile;
const {coords: {lat, lng} }: {coords: {lat: number, lng: number} } = profile;