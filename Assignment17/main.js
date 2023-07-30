var guests = ['GrandFather', 'Grandmother', 'Uncle'];
// Following line of code will select random number from 1-2,
var randomNum = Math.round(Math.random() * 2);
// Then the selected guests will be replaced by the Cousin, the Selected guests would be selected Randomly with each iteration
console.log("sorry ".concat(guests[randomNum], " would not be able to attend the Dinner."));
guests[randomNum] = 'Cousin';
// Following line of code will print the message of having more tables 
console.log('I just Found a Bigger Dinner Table');
// Following line of code will add one new guests at the begining of an Array
guests.unshift("Father");
// Follwing line of code wil add one new guest in the middle of an array, there are no in built function so we will use Manual code
// Following line of code will find the mean of the gesuts Array, and round off it, 
var Array_Mean = Math.floor(guests.length / 2);
// Using Splice method we will add new Guest in middle of an array by the help of Array_Mean 
guests.splice(Array_Mean, 0, "Mother");
// Following line of code will add guest at the end of the array 
guests.push("Brother");
// Follwing line of code will print the statement of having to invite two people only
console.log("Sorry! I can only invite two people for dinner");
// Follwing line of code will remove people out, with each time apologising
for (var i = 0; i <= guests.length; i++) {
    var removedGuest = guests[guests.length - 1];
    console.log("Sorry ".concat(removedGuest, " i cannot invite you to the Dinner"));
    guests.pop();
}
// Then the Edited List of guests will be printed 
for (var i = 0; i < guests.length; i++) {
    console.log("You are still invited ".concat(guests[i]));
}
// Following line of code will empty the list 
for (var i = 0; i <= guests.length; i++) {
    guests.pop();
}
console.log("Empty list : ".concat(guests));
