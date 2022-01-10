// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
    if (bool == true) {
        return "Yes";
    } else if (bool == false) {
        return "No";
    }
}

// Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
    return number * -1;
}

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else if (number % 2 !== 0) {
        return "Odd";
    }
}