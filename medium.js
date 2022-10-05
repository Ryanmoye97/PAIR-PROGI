function vowels(str) {
    let counter = 0;
    const checker = ["a", "e", "i", "o", "u"];
    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            counter++;
        }
    }
    return ("this is a vowel");
}

console.log(vowels("b"));