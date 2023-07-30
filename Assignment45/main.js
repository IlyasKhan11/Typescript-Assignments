function createCar(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (var i = 0; i < options.length; i += 2) {
        var key = options[i];
        var value = options[i + 1];
        car[key] = value;
    }
    return car;
}
// Call the function with required information and additional name-value pairs (color and optional feature)
console.log(createCar('Tyota', 'ABC123', 'color', 'black', 'extraFeature', 'sun roof'));
console.log(createCar('Ferrari', 'GTE213', 'color', 'red', 'extraFeature', 'Engine Upgrade'));
