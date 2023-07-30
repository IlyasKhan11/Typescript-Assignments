const Fav_Transportations:String[]=['Cars',"Airplanes","Trains","Buses"]

// Following line of code will print the series of Sentences about the array given above
// Note: The Sentence Will be printed in random onder, which makes it unique and cool 

for (let i=0;i<Fav_Transportations.length;i++){
    let RandomNum=Math.floor(Math.random()*3)
    console.log(RandomNum)
    if (RandomNum===0){
        console.log(`I Love the Affordiblity of ${Fav_Transportations[i]}`)
    }

    if (RandomNum===1){
        console.log(`I love The Comfort of ${Fav_Transportations[i]}`)
    }

    if (RandomNum===2){
        console.log(`I love the Speed of ${Fav_Transportations[i]}`)
    }
}