const Magicians:string[]=['Gini','John','Mike','Alan','Remus']

function show_magicians(magicians:string[]):void{
    for (let magician of magicians){
        console.log(magician);
    }
}

show_magicians(Magicians)