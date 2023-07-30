var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var modifiedMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        modifiedMagicians.push("the Great " + magician);
    }
    return modifiedMagicians;
}
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
var modifiedMagicians = make_great(__spreadArray([], magicians, true)); // Use the spread operator to create a copy of the array
console.log("Original magicians:");
show_magicians(magicians);
console.log("\nMagicians with 'the Great':");
show_magicians(modifiedMagicians);
