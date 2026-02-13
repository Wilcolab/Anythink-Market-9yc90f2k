/**
 * Converts a string to camelCase format.
 * 
 * Splits the input string by spaces, underscores, or hyphens, then joins the words
 * together with the first word in lowercase and subsequent words capitalized.
 * 
 * @param {string} str - The input string to convert to camelCase
 * @returns {string} The converted camelCase string
 * 
 * @example
 * toCamelCase('first name');      // 'firstName'
 * toCamelCase('user_id');         // 'userId'
 * toCamelCase('SCREEN_NAME');     // 'screenName'
 * toCamelCase('mobile-number');   // 'mobileNumber'
 */

/**
 * Converts a string to dot.case format.
 * 
 * Transforms the input string into lowercase dot-separated words. Handles camelCase,
 * snake_case, kebab-case, and space-separated inputs. Validates that the resulting
 * string contains only alphanumeric characters and dots.
 * 
 * @param {string} str - The input string to convert to dot case
 * @returns {string} The converted dot.case string
 * @throws {Error} If str is undefined or null
 * @throws {Error} If str is not a string type
 * @throws {Error} If the resulting string contains unsupported characters (anything other than [a-z0-9.])
 * 
 * @example
 * toDotCase('first name');         // 'first.name'
 * toDotCase('user_id');            // 'user.id'
 * toDotCase('SCREEN_NAME');        // 'screen.name'
 * toDotCase('mobile-number');      // 'mobile.number'
 * toDotCase('already.dot.case');   // 'already.dot.case'
 */
function toCamelCase(str) {
    return str
        .split(/[\s_-]+/)
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

function toDotCase(str) {
    if (str === undefined || str === null) {
        throw new Error("toDotCase: value is undefined or null.");
    }

    if (typeof str !== "string") {
        throw new Error("toDotCase: value must be a string.");
    }

    if (str.length === 0) {
        return "";
    }

    const trimmed = str.trim();
    if (trimmed.length === 0) {
        return "";
    }

    const dot = trimmed
        .replace(/([a-z0-9])([A-Z])/g, "$1.$2")
        .replace(/([A-Z]+)([A-Z][a-z])/g, "$1.$2")
        .replace(/[\s_-]+/g, ".")
        .replace(/\.+/g, ".")
        .toLowerCase();

    if (!/^[a-z0-9.]+$/.test(dot)) {
        throw new Error("toDotCase: value contains unsupported characters.");
    }

    return dot;
}

// Test cases
console.log(toCamelCase('first name'));      // firstName
console.log(toCamelCase('user_id'));         // userId
console.log(toCamelCase('SCREEN_NAME'));     // screenName
console.log(toCamelCase('mobile-number'));   // mobileNumber

// Dot case test cases
console.log(toDotCase('first name'));         // first.name
console.log(toDotCase('user_id'));            // user.id
console.log(toDotCase('SCREEN_NAME'));        // screen.name
console.log(toDotCase('mobile-number'));      // mobile.number
console.log(toDotCase('already.dot.case'));   // already.dot.case


