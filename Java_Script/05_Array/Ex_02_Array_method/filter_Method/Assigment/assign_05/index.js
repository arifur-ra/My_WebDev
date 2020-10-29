//Variable declaration 
const listOfWords = readwords(); //this is 

let list = document.querySelector('.list');
let listInline = document.querySelector('.list-inline');
let listPipe = document.querySelector('.list-pipe');
let str;

//assign the words to the list.
listOfWords.forEach((element, index) => {
  list.innerHTML += ` ${listOfWords[index]} |`;

});

/**
 * @param {Array<String>}newArray
 * @param {String} str
 * 
 */

function search() {
  let inputdata = document.getElementsByClassName('inputForm'); //input data is received as object

  //The inputdata is stored in the first element of the Object and this object value is assigned to the string variable str
  str = inputdata[0].value;

  //creating a copy of the original array
  let newArray = listOfWords.slice();

  //function searchArray is called with the array and search string as the parameters
  newArray = searchArray(newArray, str);
}

/**
 * @param {Array<String>} findArray
 * @param {String} searchWord
 */

function searchArray(findArray, searchWord) {
  console.log(findArray);
  console.log(searchWord);
  const matches = findArray.filter(search => search.includes(searchWord)); //filter the words from the array and check whether the wor includes the search string
  list.innerHTML = ''; //to clear the already displayed list
  matches.forEach((element, index) => {
    list.innerHTML += `  ${matches[index]}  |`; // displaying the filtered elements of an array which contains the search string
  });
  if (matches.length == 0)
    list.innerHTML += `No word matches the input`;
}