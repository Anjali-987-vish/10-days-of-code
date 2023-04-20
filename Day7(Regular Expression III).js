function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    
    
    /*
     * Do not remove the return statement
     */
    const re = new RegExp(/[0-9]+/gm);
    
    
//  / and /g and /m are delimiters that define the regular expression literal and make it global and multiline respectively.
// [0-9] is a character class that matches any digit from 0 to 9.
// + matches one or more of the preceding character or character class.
// /g modifier makes the regular expression global which means it will match all instances of the pattern in a string, not just the first one.
// /m modifier makes the regular expression multiline which means it will match the pattern across multiple lines, not just on a single line.
    
    
    
    
    
    return re;
}
