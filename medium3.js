function gcd(x, y) {
    if (!y) return y === 0 ? x : NaN;
    return gcd(y, x % y);
}
console.log(gcd(12, 8));
console.log(gcd(15, 5));
console.log(gcd(12, 13));