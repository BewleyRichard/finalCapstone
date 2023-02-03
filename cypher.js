/* Compulsory Task, 
Capstone Project II, 
Create a Caeser Cypher (Rotation 15 places).*/

let userMessage = prompt("Please enter a message");

function caeserFifteen(messageForEncription) {
let cipherString = '';
// Convert input string to array.
let arr = messageForEncription.split("");
// The for loop iterates through the array. 
for (let i = 0; i < arr.length; i++) {
// For each character in the array, .charCodeAt returns the ASCII value.     
    let asciiValue = arr[i].charCodeAt();

/* The if statement runs when the recieved ASCII value corresponds to an uppercase or lowercase character.
if the character does not meet this conditions (e.g. special characters) they are pushed to an output array unchanged.*/
    if (
        (asciiValue >= 65 && asciiValue <= 90) ||
        (asciiValue >= 97 && asciiValue <= 122)
    ) {
// Capital letters. 
        if (asciiValue >= 65 && asciiValue <= 90) {
/* The cypher is hard coded to advance letters 15 times, however, it must not return a non capital letter value. 
Here the ASCII 75 (K) increased by 15 gives ASCII 90 (Z) therefore, ASCII values above 75 must loop back to the start of the alphabet.*/
            if (asciiValue <= 75) {
                asciiValue += 15;
            } else {
                asciiValue -= 11;
            }
// Lower Case letters. As above. 
        } else {
            if (asciiValue <= 109) {
                asciiValue += 15;
            } else {
                asciiValue -= 11;
            }
        }
        cipherString += String.fromCharCode(asciiValue);
// The resulting ASCII value is conveted into a character and string, then added to ciperString. 
    } 
    
    else cipherString += arr[i];
}
return cipherString;
}

console.log(caeserFifteen(userMessage));

/* For this task utilised the following HyperionDev handouts:
"Using Built-In Functions and Defining your own Functions",
"Beginner Data Structures — Arrays and Maps" and 
and two Hyperion Dev lectures of the same titles viewed on 19/12/2022 and 15/12/2022 
to aid me in this task. 

I also used the following websites:
https://javascript.plainenglish.io/javascript-algorithm-convert-string-characters-into-ascii-bb53ae928331,
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode,
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String
to gain a further understanding of the charCodeAt and fromCharcode methods, and the String constructor.
*/