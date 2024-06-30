// Factorial Calculation



function calculateFactorial(input){
    if(typeof input !=="number" || input < 0 || !Number.isInteger(input)){
        return "Invailid value"
    }

    var sum = 1;
    for(var i=1; i<=input; i++){
        sum *= i;
    }
    return sum

}
console.log(calculateFactorial(5));


// Prime Number Checker

function isPrime(inputs){
    if(typeof inputs !== "number" || inputs <= 1 || !Number.isInteger(inputs) ){
        return "Invailid Value"
    }

    for(var i=2; i<Math.sqrt(inputs);  i++){
        if(inputs%i !== 0){
            return "true";
        }
    }
    return "false"
}
console.log(isPrime(7))
console.log(isPrime(12))
console.log(isPrime(-7))



// Longest Palindrome in Array

function isPalindrom(str){
    return str === str.split('').reverse().join('');
}

function findLongestPalindrome(arr){
    let Longest = '';

    for(let str of arr){
        if(isPalindrom(str)  && str.length > Longest.length){
            Longest = str;
        }
    }

    return Longest ? Longest : "No palindrome found";
}

console.log(findLongestPalindrome(["level", "noon", "hello", "racecar", "JavaScript"]))



// Unique Characters Counter

function countUniqueCharacters(str){
    if(typeof str !== 'string'){
        return "Invalid input"
    }

    let lowerStr = str.toLowerCase();
    let checkSet = new Set();

    for(let char of lowerStr){
        if(char !== ' ' ){
            checkSet.add(char);
        }

        
    }
    return checkSet.size, checkSet;
}

var result = countUniqueCharacters("Hello World");
console.log(result)



