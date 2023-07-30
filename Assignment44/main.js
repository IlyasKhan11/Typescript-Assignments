function make_sandwitch(ingredients) {
    console.log('THe SandWhich Consists of the following ingredients:');
    for (var _i = 0, ingredients_1 = ingredients; _i < ingredients_1.length; _i++) {
        var ingredient = ingredients_1[_i];
        console.log(ingredient);
    }
}
make_sandwitch(['Bread', 'sauce', 'chicken', 'Cheese']);
make_sandwitch(['bread', 'ketchup', 'cheese', 'beef']);
make_sandwitch(['bread', 'tomato', 'mayo', 'avacado']);
