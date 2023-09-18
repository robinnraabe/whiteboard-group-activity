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
console.log("reverseString('Hello world'):", reverseString('Hello world'));

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
console.log('fizzbuzz(300):', fizzbuzz(300));
console.log('fizzbuzz(303):', fizzbuzz(303));
console.log('fizzbuzz(305):', fizzbuzz(305));
console.log('fizzbuzz(202):', fizzbuzz(202));

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
console.log('isLeapYear(2000):', isLeapYear(2000));
console.log('isLeapYear(2012):', isLeapYear(2012));
console.log('isLeapYear(2100):', isLeapYear(2100));

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
console.log('isBLT([bread, bacon, lettuce, tomatoes, peppers, bread]):', isBLT(['bread', 'bacon', 'lettuce', 'tomatoes', 'peppers', 'bread']));
console.log('isBLT([bacon, lettuce, tomatoes, bread]):', isBLT(['bacon', 'lettuce', 'tomatoes', 'bread']));
console.log('isBLT([bread, bacon, lettuce, peppers, bread]):', isBLT(['bread', 'bacon', 'lettuce', 'peppers', 'bread']));

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
console.log("moveToEnd([1,2,3,4,5,6], even):", moveToEnd([1,2,3,4,5,6], 'even'));
console.log("moveToEnd([1,2,3,4,5,6], odd):", moveToEnd([1,2,3,4,5,6], 'odd'));

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
console.log("wordCounter(['one', 'One', 'two', 'ONE', 'one'], one):", wordCounter(['one', 'One', 'two', 'ONE', 'one'], 'one'));

// Problem 7
function addUpNumbers(number) {
    let numberSum = 0;
    while (number > 0) {
        numberSum += number;
        number--;
    }
    return numberSum;
}
console.log('addUpNumbers(10):', addUpNumbers(10));