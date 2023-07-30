var placesToVisit = [
    "Tokyo",
    "Paris",
    "New York",
    "Bali",
    "Sydney"
];
// Print the array in its original order
console.log("Original order:", placesToVisit);
// Print the array in alphabetical order without modifying the original list
var sortedAlphabetically = placesToVisit.slice().sort();
console.log("Alphabetical order:", sortedAlphabetically);
// Show that the original array is still in its original order
console.log("Original order (still):", placesToVisit);
// Print the array in reverse alphabetical order without changing the original list
var sortedReverseAlphabetically = placesToVisit.slice().sort().reverse();
console.log("Reverse alphabetical order:", sortedReverseAlphabetically);
// Show that the original array is still in its original order
console.log("Original order (still):", placesToVisit);
// Reverse the order of the list and print it
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
// Reverse the order of the list again and print it
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
// Sort the array in alphabetical order and print it
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);
// Sort the array in reverse alphabetical order and print it
placesToVisit.sort().reverse();
console.log("Sorted in reverse alphabetical order:", placesToVisit);
