function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    
    
    /*
     * Do not remove the return statement
     */
   let re = /^([aeiou]).+\1$/i;
   
// ^ matches the start of the string.
// ([aeiou]) matches any vowel character and captures it into a group.
// .+ matches one or more of any character.
// \1 is a backreference that matches the same character that was matched by the first group, ensuring that the string ends with the same vowel as the one at the beginning.
// $ matches the end of the string.
// The i flag makes the regular expression case-insensitive.

    return re;
}
