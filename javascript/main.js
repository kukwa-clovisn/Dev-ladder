// exercise one: creating a string a writing code to make it an array without string methods or higher oder fxns

let myString = "my string";

let myStringArr = [];
for(let i = 0; i < myString.length; i++) {
    myStringArr.push(myString[i]);
}

console.log(myStringArr)

let greetings = "good morning developers"

// exercise two: arring a number string in decreasing order using for loop
let stringNumber = "123"

function top(val) {
    let result = ""
    for(let m = 0; m < val.length; m++) {
        if(val[0] > val[1] && val[1] > val[2]) {
             result = val[0] + val[1] + val[2]
        }if(val[0] > val[2] && val[2] > val[1]){
             result = val[0] + val[2] + val[1]
        }if(val[0] < val[1] && val[0] > val[2]){
             result = val[1] + val[0] + val[2]
        }if(val[0] > val[1] && val[2] > val[0]) {
            result = val[2] + val[0] + val[1]
        }if(val[0] < val[1] & val[1] < val[2]) {
            result = val[2] + val[1] + val[0]
        }
    }
    return result;
}

console.log(top(stringNumber))

// exercise three: creating a string and reversing its position
let hello = "hellooo"

// creating a fxn that reverses it
function reverseString(val) {
    resultString = ""; //initializing it a string
    for(let i = val.length - 1; i >= 0; i--){
        resultString += val[i];
    }
    return resultString;
}

console.log(reverseString(hello));

// creating a function that seperates and and pushes it into an array

function stringArr(greetings) {
    let Arr = [];
    Arr[0] = ""
    Arr[1] = ""
    Arr[2] = ""

    for(let i = 0; i < greetings.length; i++) {
        if(i < 4) {
            Arr[0] += greetings[i]
        }
        if(i > 4 && i < 12){
            Arr[1] += greetings[i]
        } 
        if(i > 12) {
            Arr[2] += greetings[i]
        }
    }

    return Arr;
}

console.log(stringArr(greetings))