function isStrongPassword(password) {
    if (password.length < 8) {
        return false;
    }

    if (password.includes("password")) {
        return false;
    }

    let hasUppercase = false;
    for (let char of password) {
        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
            break;
        }
    }

    return hasUppercase;
}

// Example usage
console.log(isStrongPassword("Qwerty")); // false - Too short
console.log(isStrongPassword("passwordQwerty")); // false - Contains "password"
console.log(isStrongPassword("qwerty123")); // false - No uppercase characters
console.log(isStrongPassword("Qwerty123")); // true