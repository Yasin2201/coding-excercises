function palindrome(str) {
    const regex = /[^A-Za-z0-9]/g;
    const formattedString = str.toLowerCase().replace(regex, '');
    return formattedString === formattedString.split('').reverse().join('') ? true : false;
}

module.exports = palindrome