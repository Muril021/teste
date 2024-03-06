function invertString(string) {
    let result = '';

    for (let index = 0; index < string.length; index++) {
        result = string[index] + result;
    }

    return result;
}

const myString = 'Murilo';
const invertedString = invertString(myString);

console.log(`String original: ${myString}`);
console.log(`String invertida: ${invertedString}`);