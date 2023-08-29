// DOM
const container = document.querySelector('#container');

const calcBody = document.createElement('div');
calcBody.classList.add('calcBody');

const calcScreen = document.createElement('div');
calcScreen.classList.add('calcScreen');

const calcOperations = document.createElement('div');
calcOperations.classList.add('calcOperations');

const calcNumbers = document.createElement('div');
calcNumbers.classList.add('calcNumbers');

const btnAdd = document.createElement('button');
btnAdd.classList.add('calcBtn');
btnAdd.textContent = "+";
const btnSubtract = document.createElement('button');
btnSubtract.classList.add('calcBtn');
btnSubtract.textContent = "-";
const btnMultiply = document.createElement('button');
btnMultiply.classList.add('calcBtn');
btnMultiply.textContent = "*";
const btnDivide = document.createElement('button');
btnDivide.classList.add('calcBtn');
btnDivide.textContent = "/";

container.appendChild(calcBody);
calcBody.appendChild(calcScreen);
calcBody.appendChild(calcOperations);
calcOperations.appendChild(btnAdd);
calcOperations.appendChild(btnSubtract);
calcOperations.appendChild(btnMultiply);
calcOperations.appendChild(btnDivide);
calcBody.appendChild(calcNumbers);

for(let number = 9; number > 0; number--) {
    const btnNumber = document.createElement('button');
    btnNumber.classList.add('calcBtn');
    btnNumber.textContent = `${number}`;
    calcNumbers.appendChild(btnNumber);
}

const btnNumber0 = document.createElement('button');
btnNumber0.classList.add('calcBtn');
btnNumber0.textContent = "0";
const btnX = document.createElement('button');
btnX.classList.add('calcBtn');
btnX.textContent = "X";
const btnY = document.createElement('button');
btnY.classList.add('calcBtn');
btnY.textContent = "Y";
calcNumbers.appendChild(btnX)
calcNumbers.appendChild(btnNumber0)
calcNumbers.appendChild(btnY)

// Functions
const add = function(x, y) {
	return x+y;
};

const subtract = function(x, y) {
	return x-y;
};

const sum = function(array) {
	const sum = array.reduce((currentSum, currentValue) => currentSum + currentValue, 0);
    return sum;
};

const multiply = function(array) {
    const multiply = array.reduce((currentTotal, currentValue) => currentTotal * currentValue, 1);
    return multiply;
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(x) {
    let number = 1;

    if(x == 0) {
        return 1;
    } else {
        for(let y = 1; y <= x; y++) {
        number *= y;
    }
}

return number;
};
