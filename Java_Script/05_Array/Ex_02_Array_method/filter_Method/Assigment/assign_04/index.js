let courses = [{
        name: "ReactJS",
        type: "Web development FrontEnd",
        rank: 2,
    },
    {
        name: "Bootstrap",
        type: "css",
        rank: 3,
    },
    {
        name: "JSON",
        type: "datatype",
        rank: 2,
    },
    {
        name: "AngularJS",
        type: "Web development FrontEnd",
        rank: 4,
    },
    {
        name: "git",
        type: "vcs",
        rank: 1,
    },
    {
        name: "NodeJS",
        type: "Web development BackEnd",
        rank: 1,
    },
    {
        name: "MongoDB",
        type: "database",
        rank: 1,
    },
    {
        name: "MySQL",
        type: "database",
        rank: 5,
    },
    {
        name: "VueJS",
        type: "Web development FrontEnd",
        rank: 0,
    },
];

// please write the functions and uase them in the handlers

/**
 * The displaying :
 *
 * showDataHandler()
 *
 * The filters :
 * dataFilterNames()
 * dataFilterTypes()
 * dataFilterRanks()
 *
 * The sorting :
 * sortByNameHandler()
 * sortByTypeHandler()
 * sortByRankHandler()
 */
/**
 *
 * @param {Array<{name:string,type:string,rank:number}>} data  the array containing the value that should be display
 * @param {HTMLElement} resultDisplay
 *
 */

//showData : defining the tool
function showData(data, Display) {
    Display.innerHTML = ``;
    for (let i = 0; i < data.length; i++) {
        Display.innerHTML += `<table>
              <tr>
                 <td>${i + 1}</td>
                 <td>${data[i].name}</td>
                 <td>${data[i].type}</td>
                 <td>${data[i].rank}</td>
                </tr>
          </table>  `;
    }
}

function showDataHandler() {
    // using the tool
    showData(courses, document.getElementById("display"));
}

//..................sortByName() -- please create this tool

function sortByName(data) {
    // take isolated copy keep the reference safe
    //let sortedByName = data.slice();
    return data.sort(function (a, b) {
        //make case insensitive compare
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        } else {
            return 1;
        }
    });
}

// sortByNameHandler by using sortBYName()

function sortByNameHandler() {
    let sorted = sortByName(courses);
    showData(sorted, document.getElementById("display"));
}

//...................sortByType() -- tools...................

function sortByType(data) {
    // take isolated copy keep the reference safe
    //let sortedByType = data.slice();
    return data.sort(function (a, b) {
        //make case insensitive compare
        if (a.type.toLowerCase() < b.type.toLowerCase()) {
            return -1;
        } else {
            return 1;
        }
    });
}

// sortByTypeHandler by using sortBYName()

function sortByTypeHandler() {
    let sorted = sortByType(courses);
    showData(sorted, document.getElementById("display"));
}

//...............................................
//sortByType() -- tools
function sortByRank(data) {
    // take isolated copy keep the reference safe
    // let sortedByRank = data.slice();
    return data.sort(function (a, b) {
        //make case insensitive compare
        return a.rank - b.rank;
    });
}

// sortByTypeHandler by using sortBYName()

function sortByRankHandler() {
    let sorted = sortByRank(courses);
    showData(sorted, document.getElementById("display"));
}

/**
 *
 * @param {Array<object>} someArray
 * @param {Array} word
 */

// a filter function - tool for item.name
function filterArrayNames(someArray, word) {

    return someArray.filter(function (item) {
        if (item.name.toLowerCase() !== word.toLowerCase()) {
            return item;
        }
    });

    // newArray[] Created
}

// Handel the click event of filter button
function dataFilterNames() {
    let filterWord = document.getElementById("filter").value; // get HTML Element
    // use a filter tool
    // change the original array and and make newArray
    courses = filterArrayNames(courses, filterWord);
    // re-using the sort by  name tool
    let sortedNameArray = sortByName(courses);
    // re-using the show data tool
    showData(sortedNameArray, document.getElementById("display"));
}

/**
 *
 * @param {Array<object>} someArray
 * @param {Array} word
 */
// A filter function - tool for item.type

function filterArrayType(someArray, word) {
    return someArray.filter(function (item) {
        if (item.type.toLowerCase() != word.toLowerCase()) {
            return item;
        }
    });
}

function dataFilterTypes() {
    let filterWord = document.getElementById("filter").value;
    // change the original array and and make newArray
    // use a filter tool
    courses = filterArrayType(courses, filterWord);
    // re-using the sort by type,tool
    let sortedTypeArray = sortByType(courses);
    // re-using the show data tool
    showData(sortedTypeArray, document.getElementById("display"));
}

/**
 *
 * @param {Array<object>} someArray
 * @param {Array} word
 */
// A filter function - tool for item.rank

function filterArrayRank(someArray, word) {
    return someArray.filter(function (item) {
        if (item.rank != word) {
            return item;
        }
    });
}

function dataFilterRanks() {
    let filterWord = document.getElementById("filter").value;

    // use a filter tool
    courses = filterArrayRank(courses, filterWord);

    // re-using the sort by type, name rank tool
    let sortedRankArray = sortByRank(courses);
    showData(sortedRankArray, document.getElementById("display"));
}