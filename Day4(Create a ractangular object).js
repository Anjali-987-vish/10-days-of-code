/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    this.length = a;// this.length is used to store the length of the rectangle as a property of the object that is being created.
    this.width = b;
    this.perimeter = 2 * (a + b);
    this.area = a * b;
}
