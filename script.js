// Rectangle class
class Rectangle {
    constructor(width, height) {
        if (width <= 0 || height <= 0) {
            throw new Error("Width and height must be positive integers.");
        }
        this._width = width;
        this._height = height;
    }

    // Getters
    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    // Method to calculate area
    getArea() {
        return this._width * this._height;
    }
}

// Square class inheriting from Rectangle
class Square extends Rectangle {
    constructor(side) {
        if (side <= 0) {
            throw new Error("Side length must be a positive integer.");
        }
        super(side, side); // Call the Rectangle constructor with the same side length for width & height
    }

    // Method to calculate perimeter of the square
    getPerimeter() {
        return 4 * this.width;
    }
}

// Example usage
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width);   // Output: 5
console.log(rectangle.height);  // Output: 10
console.log(rectangle.getArea()); // Output: 50

const square = new Square(7);
console.log(square.width);   // Output: 7
console.log(square.height);  // Output: 7
console.log(square.getArea());  // Output: 49
console.log(square.getPerimeter()); // Output: 28

// Expose classes for Cypress testing
window.Rectangle = Rectangle;
window.Square = Square;
