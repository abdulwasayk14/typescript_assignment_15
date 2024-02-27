"use strict";
let Guest_List = ['Sarfaraz Ahmed', 'Babar Azam', 'shoaib Malik'];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Respected Sir. ' + Guest_List[i] + ',\nIt is our pleasure to invite you,Thank You\n\nThank You)!');
}
let absent_Guest = 'shoaib Malik';
let new_Guest = 'Imad Wasim';
Guest_List[2] = new_Guest;
for (let i = 2; i < Guest_List.length; i++) {
    console.log('Respected Sir. ' + Guest_List[i] + ',\nIt is our pleasure to invite you,Thank You\n\nUnfortunately)!');
}
console.log(`Sir. ${absent_Guest} is not coming to play cricket match .`);
