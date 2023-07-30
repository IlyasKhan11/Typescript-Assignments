function createCar(manufacturer:string, modelName:string, ...options) {
    const car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };

    for (let i = 0; i < options.length; i += 2) {
        const key = options[i];
        const value = options[i + 1];
        car[key] = value;
    }

    return car;
}

// Call the function with required information and additional name-value pairs (color and optional feature)

console.log(createCar('Tyota','ABC123','color','black','extraFeature','sun roof'));
console.log(createCar('Ferrari','GTE213','color','red','extraFeature','Engine Upgrade'))
