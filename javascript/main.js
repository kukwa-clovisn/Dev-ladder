let myString = "this is a string";

let myStringArr = [];
for(let i = 0; i < myString.length; i++) {
    myStringArr.push(myString[i]);
}

// console.log(myStringArr)

let greetings = "good morning developers"

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