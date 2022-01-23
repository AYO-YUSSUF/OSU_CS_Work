'use strict';
// Don't add or change anything above this comment.

/*
* Don't change the declaration of this function.
*/
const reducer1 = (previousValue, currentValue) => {

    // Checks to see if both values are numbers.  If so returns sum.
    // If not checks each value on its own and returns whichever is a number.  
    // Finally if neither are numbers 0 is returned.
    if (typeof previousValue === "number" && typeof currentValue === "number") {

        return previousValue + currentValue;

    } else if (typeof previousValue === "number") {

        return previousValue;

    } else if (typeof currentValue === "number") {

        return currentValue;

    } else {

        return 0;

    }

};

/*
* Don't change the declaration of this function.
*/
const reducer2 = (previousValue, currentValue) => {
    
    // If all values are numeric, returns sum.  Otherwise throws you a big fat TypeError.
    if (typeof previousValue === "number" && typeof currentValue === "number") {

        return previousValue + currentValue;

    } else {

        throw new TypeError('My error message');

    }

};


// Don't add or change anything below this comment.
module.exports = { reducer1, reducer2 };