var user_name = "ilyas khan";
// Following code converts the string into Lower case
console.log("The Persons name in Lower case is: ".concat(user_name.toLowerCase()));
// Following code converts the string into Upper case
console.log("The Persons name in upper case is: ".concat(user_name.toUpperCase()));
// Following code converts the string into Title case AS there is not funciton in the Javascript/Typescript to Convert into Title case therefore we will do it manually
var Start = true;
// Start the Loop
while (Start) {
    // Following Condition checks weather the Name Data is single letter or Multi letter
    if (user_name.split(' ').length > 1) {
        // if MultiLetter THe String will coveted into Arrays then will be made in Titile case with Map function, 
        var InTitleCaseArr = user_name.split(' ').map(function (Name) {
            return Name.replace(Name[0], Name[0].toUpperCase());
        });
        var InTitleCase = InTitleCaseArr.join(' ');
        console.log("The Persons Name in Title case is: ".concat(InTitleCase));
        Start = false;
    }
    if (user_name.split(' ').length === 1) {
        // if single letter there will be no Loop or Map Function be used, and it will simply make the data into Title data 
        var InTitleCase = user_name.replace(user_name[0], user_name[0].toUpperCase());
        console.log("The Persons name in Title case is: ".concat(InTitleCase));
        Start = false;
    }
}
