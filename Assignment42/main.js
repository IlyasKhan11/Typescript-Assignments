var Magicians = ['Gini', 'John', 'Mike', 'Alan', 'Remus'];
function make_great(magician_name) {
    var new_name = "Great ".concat(magician_name);
    return new_name;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(make_great(magician));
    }
}
show_magicians(Magicians);
