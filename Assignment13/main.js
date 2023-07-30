var Fav_Transportations = ['Cars', "Airplanes", "Trains", "Bueses"];
// Following line of code will print the series of Sentences about the array given above 
for (var i = 0; i < Fav_Transportations.length; i++) {
    var RandomNum = Math.floor(Math.random() * 3);
    console.log(RandomNum);
    if (RandomNum === 0) {
        console.log("I Love the Affordiblity of ".concat(Fav_Transportations[i]));
    }
    if (RandomNum === 1) {
        console.log("I love The Comfort of ".concat(Fav_Transportations[i]));
    }
    if (RandomNum === 2) {
        console.log("I love the Speed of ".concat(Fav_Transportations[i]));
    }
}
