'use strict';
// Don't add or change anything above this comment.

/*
* Don't change the declaration of this function.
*/

function deepEqual(val1, val2) {

    // This adequately covers cases 1 to 4 in the assignment.  Thanks teach!
    if (val1 === val2) {

        return true;

    // This else block will cover case 5
    } else if (typeof val1 === "object" && typeof val2 === "object") {

        // Handles either value being null (if both were null they would be true above)
        if (val1 === null || val2 == null) {

            return false;

        // Handles both objects being arrays
        } else if (Array.isArray(val1) && Array.isArray(val2)) {

            // Arrays must be of the same length to be deep equal
            if (val1.length === val2.length) {

                // Loops through all elements of both arrays recursively checking them for deep equality
                for (let i = 0; i < val1.length; i++) {

                    if (!deepEqual(val1[i], val2[i])) {

                        return false;

                    }

                }

                // If all of the elements passed deepEqual, the arrays are deep equal
                return true;

            }

        // Handles both objects being non-array objects
        } else if (!Array.isArray(val1) && !Array.isArray(val2)){

            // Checks to ensure both objects have same number of keys
            if (Object.keys(val1).length === Object.keys(val2).length) {

                // Checks the keys for deep equality
                if (deepEqual(Object.keys(val1).sort(), Object.keys(val2).sort())) {

                    // Checks the values for deep equality
                    if (deepEqual(Object.values(val1).sort(), Object.values(val2).sort())) {

                        return true;

                    }

                }

            }
        
        } 

    }

    // One final catch all.  Anything that wasn't true above cannot be deep equal.
    return false;

}

// Don't add or change anything below this comment.
module.exports = deepEqual;