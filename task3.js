// a) 1, 3, 5, 7, ___
function nextNumberA(number) {
    return number + 2;
}

// b) 2, 4, 8, 16, 32, 64, ___
function nextNumberB(number) {
    return number * 2;
}

// c) 0, 1, 4, 9, 16, 25, 36, ___
function nextNumberC(number) {
    return Math.pow(Math.sqrt(number) + 2, 2);
}

// d) 4, 16, 36, 64, ___
function nextNumberD(number) {
    return Math.pow(Math.sqrt(number) + 2, 2);
}

// e) 1, 1, 2, 3, 5, 8, ___
function nextNumberE(number1, number2) {
    return number1 + number2;
}

// f) 2, 10, 12, 16, 17, 18, 19, ___
function nextNumberF() {
    return 200;
}

console.log(nextNumberA(7));
console.log(nextNumberB(64));
console.log(nextNumberC(36));
console.log(nextNumberD(64));
console.log(nextNumberE(5, 8));
console.log(nextNumberF());
