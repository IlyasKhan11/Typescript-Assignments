var guests = ['GrandFather', 'Grandmother', 'Uncle'];
var randomNum = Math.round(Math.random() * 2);
console.log("sorry ".concat(guests[randomNum], " would not be able to attend the Dinner."));
guests[randomNum] = 'Ali';
for (var i = 0; i < guests.length; i++) {
    console.log("Can you please come to the Dinner ".concat(guests[i]));
}
