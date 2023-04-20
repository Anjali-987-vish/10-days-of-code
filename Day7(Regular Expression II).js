function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    
    
    /*
     * Do not remove the return statement
     */
    const re = new RegExp(/^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)\s?[a-z]+$/i);
        
        
//   / and /i are delimiters that define the regular expression literal and make it case-insensitive.
// ^ matches the start of the string.
// (Mr\.|Dr\.|Er\.|Ms\.|Mrs\.) matches any of the title strings Mr., Dr., Er., Ms., or Mrs., with a literal dot (.) at the end.
// \s? matches an optional whitespace character.
// [a-z]+ matches one or more lowercase letters.
// $ matches the end of the string.   

    return re;
}
