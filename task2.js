function fibonacciSequence(number) {
    number = parseInt(number);
    let firstNumber = 0;
    let secondNumber = 1;
    let nextNumber = firstNumber + secondNumber;

    while (nextNumber <= number) {
        if (nextNumber === number) {
            return `${number} pertence à sequência de Fibonacci.`;
        }

        firstNumber = secondNumber;
        secondNumber = nextNumber;
        nextNumber = firstNumber + secondNumber;
    }

    return `${number} não pertence à sequência de Fibonacci.`;
}

const randomNumber = 23;
console.log(fibonacciSequence(randomNumber));