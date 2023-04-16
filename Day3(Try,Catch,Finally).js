/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
      //  split, reverse, and join methods are used to reverse the string
      var reversed = s.split("").reverse().join("");
      console.log(reversed);
      //Together, these three methods can be used to reverse a string. The split() method creates an array of characters, the reverse() method reverses the order of elements in the array, and the join() method concatenates the elements into a single string in reverse order.
    } catch (e) {
      // If an exception is thrown, catch it and print the error message and the original string
      console.log(e.message);
      console.log(s);
    }
  }