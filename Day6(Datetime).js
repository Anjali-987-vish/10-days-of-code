'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"





//the main function

//This is the function definition below. It takes a single parameter, dateString, which is expected to be a string representing a date.
function getDayName(dateString){
     //This creates an array called days containing the names of the days of the week in order 
    const days = [
        'Sunday','Monday','Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday'
    ];
    //this function takes a date string, parses it into a Date object, and returns the name of the corresponding day of the week as a string.
    return days[(new Date(dateString)).getDay()];
}










function main() {
    const d = +(readLine());
    
    for (let i = 0; i < d; i++) {
        const date = readLine();
        
        console.log(getDayName(date));
    }
}