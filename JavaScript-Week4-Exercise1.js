// TODO: Create a function called ‘multiply’ that will take in 3 parameter andmultiplyall 3 numbers together. Note: The argument passed must NOT be the same number. // TODO: Create a function expression called ‘convertToSeconds’ that takes inanumber of minutes as an argument and returns the amount in seconds. ***Donotuse a console.log() inside of the function***
function multiply(num1,num2,num3){

return num1 * num2 * num3;

}

console.log(multiply(1,2,3));

// TODO: Create a function expression called ‘convertToSeconds’ that takes inanumber of minutes as an argument and returns the amount in seconds. ***Donotuse a console.log() inside of the function***

function convertToSeconds(num_of_min){
    return num_of_min * 60 + " seconds"

}

console.log(convertToSeconds(5));

// TODO: Create a function called fahrenheitToCelsius that takes the temperatureasan parameter and returns the equivalent temperature in Celsius. ***Do not useaconsole.log() inside of the function***

function fahrenheitToCelsius(temperatureasan){
    return (temperatureasan - 32) * 5/9 + "°C";
}
console.log(fahrenheitToCelsius(75));

// TODO: Create a function that takes a string as a parameter and returns thereverseof the string. ***Do not use a console.log() inside of the function ***

function reverseString(string){
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
}
console.log(reverseString("my brain is on another level"));

// TODO: Create a function that takes in a string and returns the number of Vowelsinthe sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not useaconsole.log() inside of the function***

function countVowels(string){
    let vowels = string.match(/[aeiou]/gi);
    
    if (!vowels) {
        return 0 + " vowels";
    }
    
    return vowels.length;
} 

console.log(countVowels("im so smart"));   


// TODO: Create a “isPrime” function that takes a number as a parameter andreturnstrue if the number is prime, and false otherwise. Make sure to test your codewith4numbers

function isPrime(numb){
if (numb <= 1){
return false
}

if(numb < 2 , numb % 2 == 0 ){
return false
}
if (numb/numb == 1, numb / 1 == numb){
    return true
}

}
console.log(isPrime(13))