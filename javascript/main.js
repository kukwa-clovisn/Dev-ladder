// exercise one: creating a string a writing code to make it an array without string methods or higher oder fxns

// let myString = "my string";

// let myStringArr = [];
// for (let i = 0; i < myString.length; i++) {
//     myStringArr.push(myString[i]);
// }

// console.log(myStringArr)

// let greetings = "good morning developers"

// // exercise two: arring a number string in decreasing order using for loop =====================================>
// let stringNumber = "123"

// function top(val) {
//     let result = ""
//     for (let m = 0; m < val.length; m++) {
//         if (val[0] > val[1] && val[1] > val[2]) {
//             result = val[0] + val[1] + val[2]
//         }
//         if (val[0] > val[2] && val[2] > val[1]) {
//             result = val[0] + val[2] + val[1]
//         }
//         if (val[0] < val[1] && val[0] > val[2]) {
//             result = val[1] + val[0] + val[2]
//         }
//         if (val[0] > val[1] && val[2] > val[0]) {
//             result = val[2] + val[0] + val[1]
//         }
//         if (val[0] < val[1] & val[1] < val[2]) {
//             result = val[2] + val[1] + val[0]
//         }
//     }
//     return result;
// }

// console.log(top(stringNumber))

// // exercise three: creating a string and reversing its position =====================================================>
// let hello = "hellooo"

// // creating a fxn that reverses it
// function reverseString(val) {
//     resultString = ""; //initializing it a string
//     for (let i = val.length - 1; i >= 0; i--) {
//         resultString += val[i];
//     }
//     return resultString;
// }

// console.log(reverseString(hello));

// //exercise four: creating a function that seperates and and pushes it into an array ============================>

// function stringArr(greetings) {
//     let Arr = [];
//     Arr[0] = ""
//     Arr[1] = ""
//     Arr[2] = ""

//     for (let i = 0; i < greetings.length; i++) {
//         if (i < 4) {
//             Arr[0] += greetings[i]
//         }
//         if (i > 4 && i < 12) {
//             Arr[1] += greetings[i]
//         }
//         if (i > 12) {
//             Arr[2] += greetings[i]
//         }
//     }

//     return Arr;
// }

// console.log(stringArr(greetings))

// exercise five:

// temporal database from where the posible sentences will be stored.
let searchBox = [
    "i am in school",
    "i will be going to work ",
    "i an coming soon",
    "sorry i will not come today again",
    "what is love?",
    "programming tutorials",
    "how to code successfully",
];

/**
 * getting the items from the html file
 */
let searchText = document.getElementById("search");
let items = document.getElementById("items");
let box = document.getElementById("box");

let searchVal = searchText.value;

if (searchText.value == "") {
    box.style.display = "none"
}
/**
 * creating the render function that renders the list of possible searches on the viewport
 */
const render = (res) => {
    box.style.display = "block";
    let list = res
        .map((item) => {
            return `<li class="item"> ${item}</li>`;
        })
        .join(" ");
    items.innerHTML = list;
    let selectedItem = document.querySelectorAll(".item");
    selectedItem.forEach((val) => {
        val.addEventListener("click", () => {
            searchText.value = val.innerHTML;
            searchSentence(val.innerHTML);
        });
    });
};

/**
 * listening an event whenver a users presses a key or inputs a letter then fire a search callback.
 */
searchText.addEventListener("keyup", () => {
    if (searchText.value) {
        let results = searchBox.filter((item) => {
            return item.includes(searchText.value);
        });

        if (!results.length) {
            return searchSentence(searchText.value);
        } else {
            render(results);
        }
    } else {
        box.style.display = "none"
    }
});

/**
 *
 * incase there is a sentence that some one paste into the search input field
 */
function searchSentence(sentence) {
    if (!sentence || sentence.length < 1) {
        box.style.display = "none"
        return console.log("no sentence");
    }
    // removing the whitespace added to the sentence 
    sentence = sentence.slice(1);

    let result = searchBox.filter((item) => {
        console.log(item);
        return item.includes(sentence);
    });

    if (!result.length) {
        return box.style.display = "none"
    }

    render(result);
}


/**
 * copy text functionality
 */

let copybtn = document.querySelector('#copybtn');
let pastebtn = document.querySelector('#pastebtn');
let text = document.querySelector('#copy-text')

copybtn.addEventListener('click', async () => {

    await navigator.clipboard.writeText(text.value);
    const copied = await navigator.clipboard.readText();

});

cutbtn.addEventListener('click', async () => {
    await navigator.clipboard.writeText(text.value);
    const cut = await navigator.clipboard.readText()
    text.value = await "";
})

pastebtn.addEventListener('click', async () => {
    const newText = await navigator.clipboard.readText();
    searchText.value = await newText;
})