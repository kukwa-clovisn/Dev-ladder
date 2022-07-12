//We're goind to create a temporal or fake database to get the list of dropdowns from.
let searchBox = [
  "i am in school",
  "i will be going to work ",
  "i an coming soon",
  "sorry i will not come today again",
  "what is love?",
  "programming tutorials",
  "how to code successfully",
];

// Now we're going to get the elements from the html file using the js dom methods;
let searchText = document.getElementById("search");
let items = document.getElementById("items");
let box = document.getElementById("box");

// We create a function that will render the list of possible searches;
const renderFunc = (data) => {
  box.style.display = "block"; //we show the div with id lists.
  // we map through the data received by the render function probably from an api or backend
  let list = data
    .map((item) => {
      return `<li class="item">${item}</li>`;
    })
    .join(" ");
  items.innerHTML = list;
  // here we have to query all the items not just one so we use querySelectorAll instead of querySelector
  let selectedItem = document.querySelectorAll(".item"); //we get the selected items

  selectedItem.forEach((val) => {
    val.addEventListener("click", () => {
      searchText.value = val.innerHTML;
      box.style.display = "none";
      //we're going to create this function for sentences.
    });
  });
};

// Now this is suppose to happen when a user presses a key so we need to handle the key event
searchText.addEventListener("keyup", () => {
  // if there is a letter
  if (searchText.value) {
    box.style.display = "block";
    // we filter throught our list and return the item with corresponding word or letter
    let results = searchBox.filter((item) => {
      return item.includes(searchText.value);
    });

    //   if there is no match,
    if (!results.length) {
      return searchSentence(searchText.value);
    } else {
      renderFunc(results);
    }
  } else {
    //   if there is no word or sentence
    box.style.display = "none";
  }
});

// now we create a function that will handle sentences in case user copies and pastes a sentence into the search tab
function searchSentence(sentence) {
  if (!sentence || sentence.lenth < 1) {
    // we hide the dropdown
    box.style.display = "none";
    return;
  }
  // next we need to remove all whitespaces added to a sentence so as not to make our search faulty.
  sentence = sentence.slice(1);

  let result = searchBox.filter((item) => {
    return item.includes(sentence);
  });

  // if there is no result,
  if (!result.length) {
    return (box.style.display = "none");
  }
  // we display the result or possible matches
  renderFunc(result);
}
