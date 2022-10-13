var profile = {
    name: 'Geoff',
    age: 53,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge: function (age) {
        this.age = age;
    }
};
//Destructuring
var age = profile.age;
var _a = profile.coords, lat = _a.lat, lng = _a.lng;
//# sourceMappingURL=objects.js.map