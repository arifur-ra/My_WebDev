/*------------- Assignemnt----------------- */

const myData = [{
        name: 'ReactJS',
        type: 'javascript',
        rank: 2
    }, {
        name: 'Bootstrap',
        type: 'css',
        rank: 3
    },
    {
        name: 'JSON',
        type: 'datatype',
        rank: 2
    }, {
        name: 'AngularJS',
        type: 'javascript',
        rank: 4
    },
    {
        name: 'VSCode',
        type: 'editing',
        rank: 1
    },
    {
        name: 'Google.com',
        type: 'search',
        rank: 1
    }, {
        name: 'iPad',
        type: 'device',
        rank: 1
    }, {
        name: 'Hamburger SV',
        type: 'football team',
        rank: 5
    }, {
        name: 'Family',
        type: 'relation',
        rank: 0

    }
];



//Show Data function :
function showData() {
    //  table.classList.add('data');
    display.innerHTML = ``;
    for (let index = 0; index < myData.length; index++) {
        // '+=' : means adding extra elements , while '=': means replace
        display.innerHTML += `<tr>
        <td>${index+1}</td>
        <td>${myData[index].name}</td>
        <td>${myData[index].type}</td>
        <td>${myData[index].rank}</td>
       </tr>
       `;
    }
}

// * sortByName()

function sortByName() {
    // table.classList.remove('data');
    // take isolated copy keep the refernce safe
    let sortedByName = myData.slice();
    sortedByName.sort(function (a, b) {
        //make case insensitive compare
        if (a.name.toUpperCase() < b.name.toUpperCase()) {
            return -1;
        } else {
            return 1;
        }

    });
    display.innerHTML = ``;
    for (let index = 0; index < sortedByName.length; index++) {
        // '+=' : means adding extra elements , while '=': means replace
        display.innerHTML += `<tr>
        <td>${index+1}</td>
        <td>${sortedByName[index].name}</td>
        <td>${sortedByName[index].type}</td>
        <td>${sortedByName[index].rank}</td>
       </tr>
       `;
    }
    console.table(sortedByName);
}

// * sortByType()

function sortByType() {
    // table.classList.remove('data');

    // take isolated copy keep the refernce safe
    let sortedByType = myData.slice();
    sortedByType.sort(function (a, b) {
        //make case insensitive compare
        if (a.type.toLowerCase() < b.type.toLowerCase()) {
            return -1;
        } else {
            return 1;
        }

    });
    display.innerHTML = ``;


    for (let index = 0; index < sortedByType.length; index++) {
        // '+=' : means adding extra elements , while '=': means replace
        display.innerHTML += `<tr>
       <td>${index+1}</td>
       <td>${sortedByType[index].name}</td>
       <td>${sortedByType[index].type}</td>
       <td>${sortedByType[index].rank}</td>
      </tr>
      `;
    }
    console.table(sortedByType);
}


// * sortByRank()

function sortByRank() {
    // table.classList.remove('data');

    // take isolated copy keep the refernce safe
    let sortedByRank = myData.slice();
    sortedByRank.sort(function (a, b) {
        return a.rank - b.rank;


    });
    display.innerHTML = ``;


    for (let index = 0; index < sortedByRank.length; index++) {
        // '+=' : means adding extra elements , while '=': means replace
        display.innerHTML += `<tr>
       <td>${index+1}</td>
       <td>${sortedByRank[index].name}</td>
       <td>${sortedByRank[index].type}</td>
       <td>${sortedByRank[index].rank}</td>
      </tr>
      `;
    }
    console.table(sortedByRank);
}