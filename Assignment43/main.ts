function show_magicians(magicians:string[]):void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians:string[]) {
    let modifiedMagicians = [];
    for (let magician of magicians) {
        modifiedMagicians.push("the Great " + magician);
    }
    return modifiedMagicians;
}

let magicians:string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
let modifiedMagicians = make_great([...magicians]); // Use the spread operator to create a copy of the array

console.log("Original magicians:");
show_magicians(magicians);

console.log("\nMagicians with 'the Great':");
show_magicians(modifiedMagicians);
