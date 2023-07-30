let guests:String[]=['GrandFather','Grandmother','Uncle']


// Following line of code will select random number from 1-2,
let randomNum:Number=Math.round(Math.random()*2)

// Then the selected guests will be replaced by the Cousin, the Selected guests would be selected Randomly with each iteration
console.log(`sorry ${guests[randomNum]} would not be able to attend the Dinner.`)
guests[randomNum]='Cousin'

// Following line of code will print the message of having more tables 
console.log('I just Found a Bigger Dinner Table')

// Following line of code will add one new guests at the begining of an Array
guests.unshift("Father")

// Follwing line of code wil add one new guest in the middle of an array, there are no in built function so we will use Manual code

// Following line of code will find the mean of the gesuts Array, and round off it, 
let Array_Mean:Number=Math.floor(guests.length/2)
// Using Splice method we will add new Guest in middle of an array by the help of Array_Mean 
guests.splice(Array_Mean,0,"Mother")

// Following line of code will add guest at the end of the array 
guests.push("Brother")

// Then the Edited List of guests will be printed 
for (let i=0;i<guests.length;i++){
    console.log(`Can you please come to the Dinner ${guests[i]}`)
}