function validBraces(braces) {
    let x = []
    for (let i = 0; i < braces.length; i++) {
        if (braces[i] === "(" || braces[i] === "{" || braces[i] === "[") {
            x.push(braces[i])
        } else {
            if (x.length === 0) return false
            let lastValue = x[x.length - 1]
            if ((braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '(')) {
                x.pop()
            } else {
                break;
            }
        }
    }
    return x.length === 0
}


console.log(validBraces("()")) // true
console.log(validBraces("[]")) // true
console.log(validBraces("(}")) // false
console.log(validBraces("[(])")) // false