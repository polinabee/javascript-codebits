function PalindromeTwo(str) {
    if (str.toLowerCase().replace(/[^a-z]/g, '') == str.toLowerCase().replace(/[^a-z]/g, '').split('').reverse().join('')){
        return true;
    }
    return false;
}
PalindromeTwo(readline());