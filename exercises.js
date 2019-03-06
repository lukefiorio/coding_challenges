// Function -  FirstFactorial(num)
// The function will take the num parameter being passed and return the factorial of it (ie. if num =3, return(3 * 2 * 1)).  For test cases, the range will be between 1 and 18.

function FirstFactorial(num) {
    var result = 1;
    for (var i=num; i>0; i--) {
        result = result * i
    }
    return result;
}

//console.log(FirstFactorial(1));
//console.log(FirstFactorial(2));
//console.log(FirstFactorial(4));
//console.log(FirstFactorial(6));
//console.log(FirstFactorial(10));


// Function - SimpleAdding(num)
// The function will take the num parameter and add up all the numbers from 1 to num.  For test cases, the parameter num will be any number from 1 to 1000.

function SimpleAdding(num) {
    var result = 0;
    for (var i=1; i<=num; i++) {
        result +=i;
    }
    return result;
}

function SimpleAdding2(num) {
    return (num**2 + num) / 2;
}

//console.log(SimpleAdding(20));
//console.log(SimpleAdding2(20));


// Function - LetterCapitalize(str)
// The function will take the str parameter being passed and capitalize the first letter of each word.  Words will be separated by only one space.

function LetterCapitalize(str) {
    var strArray = str.split(" ");
    for (var i=0; i<strArray.length; i++) {
        strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].substring(1,strArray[i].length)
    }
    return strArray.join(" ");
}

//console.log(LetterCapitalize('how are you doing?'));

// Function rangeRover(arr)
// The function will take an array of two numbers and return the sum of those two numbers AND all numbers between them.  The lowest number will not always come first.  For example rangeRover([1, 4]) should return 10, i.e.(1 + 2 + 3 + 4), rangeRover([4, 1]) should also return 10.

function rangeRover(arr) {
    arr.sort((a,b) => a - b);
    var result = 0;
    for (var i=arr[0]; i<=arr[1]; i++) {
        result +=i;
    }
    return result;
}

//var testArr = [10,-4];
//console.log(rangeRover(testArr));

// Function missingLetter(str)
// The function will find the missing letter passed in the parameter and return it.  If all letters are present in the string, the return will be undefined.  For example missingLetter("abce") should return "d", missingLetter("bcd") should return undefined.

function missingLetter(str) {
    var firstCode = str.charCodeAt(0);
    if (firstCode>=65 && firstCode<=90) {
        var codeOffset = 32;
    } else if (firstCode>=97 && firstCode<=122) {
        var codeOffset = -32;
    } else {
        return "letters only please";
    }
    
    for (var i = 1; i<str.length; i++) {
        if (str.charCodeAt(i) !== firstCode+i && str.charCodeAt(i) !== firstCode+i+codeOffset) {
            return String.fromCharCode(firstCode+i);
        }
    }
}

//console.log(missingLetter("jKlMnl"));

// Function hailCaesar(num)
// The function will take the num parameter and convert the given number into a roman numeral.  For example hailCaesar(2) should return "II", hailCaesar(5) should return "V".

//Symbol	I	V	X	L	C	D	M
//Value	    1	5	10	50	100	500	1,000

// IIII -> IV
// XXXX -> XL
// CCCC -> CD

function hailCaesar(num) {

    var runTotal = 0;
    var romanNum = "";
    while (runTotal<num) {
        if ((num-runTotal)>=1000) {
            romanNum += "M";
            runTotal +=1000;
        } else if ((num-runTotal)>=500) {
            romanNum += "D";
            runTotal +=500;
        } else if ((num-runTotal)>=100) {
            romanNum += "C";
            runTotal +=100;
        } else if ((num-runTotal)>=50) {
            romanNum += "L";
            runTotal +=50;
        } else if ((num-runTotal)>=10) {
            romanNum += "X";
            runTotal +=10;
        } else if ((num-runTotal)>=5) {
            romanNum += "V";
            runTotal +=5;
        } else if ((num-runTotal)>=1) {
            romanNum += "I";
            runTotal +=1;
        }
    }
    romanNum = romanNum.replace("IIII","IV");
    romanNum = romanNum.replace("XXXX","XL");
    romanNum = romanNum.replace("CCCC","CD");

    return romanNum;
}

//console.log(hailCaesar(3004));

// Function spinalTap(str)
// The function will convert a string to spinal case.  Spinal case is all-lowercase-words-joined-by-dashes.  For example spinalTap("I own this Taco Stand!") should return "i-own-this-taco-stand!".

function spinalTap(str) {
    str = str.toLowerCase();
    var strArray = str.split(" ");
    return strArray.join("-");
}

//console.log(spinalTap("I reALLy   HOpe this w0rks!"))


// Function sumFibs(num)
// The function will return the sum of all ODD Fibonacci numbers up to and including the passed number if it's a Fibonacci number.  The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, where the next number is found by adding up the two numbers before it.  For example subFibs(4) should return 5, sumbFibs(1000) should return 1785.

function sumFibs(num) {

    if (num<=0) {
        var oddFibs = 0;
    } else {
        var fibArr = [0,1];
        var newestFib = 1;
        var oddFibs = 1;
        for (var i=0; fibArr[fibArr.length-1]<num; i++) {
            newestFib = fibArr[i]+fibArr[i+1];
            fibArr.push(newestFib);
            if (newestFib%2>0 && newestFib<=num) {
                oddFibs += newestFib;
            }
        }
        fibArr.splice(-1,1);
        console.log(fibArr);
    }

    return oddFibs;
}

//console.log(sumFibs(10000));