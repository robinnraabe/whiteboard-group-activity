console.log('Hello Group');

// Problem 1
function reverseString(stringToReverse) {
    let stringArray = stringToReverse.split('');
    let reverseArray = [];
    for (let string of stringArray) {
        reverseArray.unshift(string);
    }
    newString = reverseArray.join('');
    return newString
}

//Problem 2
function fizzbuzz(number) {
    if (number % 15 === 0) {
        return 'FizzBuzz';
    }
    else if (number % 3 === 0) {
        return 'Fizz';
    }
    else if (number % 5 === 0) {
        return 'Buzz';
    }
    else {
        return number;
    }
}

// Problem 3
function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    }
    else if (year % 100 === 0) {
        return false
    }
    else if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}

// Problem 4
function isBLT(array) {
    let bacon = false;
    let lettuce = false;
    let tomatoes = false;
    if (array[0] == 'bread' && array[array.length-1] == 'bread') {
        for (let string of array) {
            if (string == 'bacon') {
                bacon = true;
            }
            else if (string == 'tomatoes') {
                tomatoes = true;
            }
            else if (string == 'lettuce') {
                lettuce = true;
            }
        }
        if (bacon == true && lettuce == true && tomatoes == true) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

// Problem 5
function moveToEnd(array, parity) {
    let oddArray = [];
    let evenArray = [];
    let newArray = [];
    for (let number of array) {
        if (number % 2 == 0) {
            evenArray.push(number);
        }
        else {
            oddArray.push(number);
        }
    }
    if (parity == 'even') {
        return oddArray.concat(evenArray);
    }
    else if (parity == 'odd') {
        return evenArray.concat(oddArray);
    }
}

// Problem 6
function wordCounter(array, string) {
    let stringCount = 0;
    for (let item of array) {
        if (item.toLowerCase() === string.toLowerCase()) {
            stringCount++;
        }
    }
    return stringCount;
}

// Problem 7
function addUpNumbers(number) {
    let numberSum = 0;
    while (number > 0) {
        numberSum += number;
        number--;
    }
    return numberSum;
}