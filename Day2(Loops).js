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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */





function vowelsAndConsonants(s) {
     for (let i = 0; i < s.length; i++) {
        const letter = s[i];
if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
            console.log(letter);
    }
    for (let i = 0; i < s.length; i++) {
          const letter = s[i];
if (letter !== "a" && letter !== "e" && letter !== "i" && letter !== "o" && letter !== "u")
            console.log(letter);
    }  
}







function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}