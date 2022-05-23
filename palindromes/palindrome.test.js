const palindrome = require('./palindrome');

describe("Palindrome function", () => {
    test("Not palindrome should return false", () => {
        expect(palindrome('test')).toBeFalsy();
    });

    test("Is palindrome should return true", () => {
        expect(palindrome('noon')).toBeTruthy();
    });

    test("Is palindrome with capital letter should return true", () => {
        expect(palindrome('Madam')).toBeTruthy();
    });

    test("Is palindrome sentence should return true", () => {
        expect(palindrome('Able was I ere I saw Elba')).toBeTruthy();
    });

    test("Is palindrome with numbers should return true", () => {
        expect(palindrome('1881')).toBeTruthy();
    });

    test("Is palindrome with punctuation should return true", () => {
        expect(palindrome('A man, a plan, a canal, Panama!')).toBeTruthy();
    });
});