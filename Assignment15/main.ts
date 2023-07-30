let guests:String[]=['GrandFather','Grandmother','Uncle']


// Following line of code will select random number from 1-2,
let randomNum=Math.round(Math.random()*2)

// Then the selected guests will be replaced by the Cousin, the Selected guests would be selected Randomly with each iteration
console.log(`sorry ${guests[randomNum]} would not be able to attend the Dinner.`)
guests[randomNum]='Cousin'

// Then the Edited List of guests will be printed 
for (let i=0;i<guests.length;i++){
    console.log(`Can you please come to the Dinner ${guests[i]}`)
}