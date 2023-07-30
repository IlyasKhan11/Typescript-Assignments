var Animals = ['Lion', 'Tiger', 'Cat'];
for (var _i = 0, Animals_1 = Animals; _i < Animals_1.length; _i++) {
    var animal = Animals_1[_i];
    var randomNum = Math.round(Math.random() * 2);
    if (randomNum === 0) {
        console.log("".concat(animal, " is located in Africa and India"));
    }
    if (randomNum === 1) {
        console.log("".concat(animal, " is very dangerous"));
    }
    if (randomNum === 2) {
        console.log("".concat(animal, " is under threat of extinction"));
    }
}
console.log('all of these Animals are Carnivours');
