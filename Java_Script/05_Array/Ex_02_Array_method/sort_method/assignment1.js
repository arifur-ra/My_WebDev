// ..................Assignment I.........................

// show the every month assending way to january to December;

let unSortedMonths = ['august', 'september', 'january', 'february', 'october', 'march', 'november', 'april', 'december', 'may', 'july', 'june'];
let sortedMonths = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];


unSortedMonths.sort(function (a, b) {

  return sortedMonths.indexOf(a) - sortedMonths.indexOf(b);

});
console.table(sortedMonths);


// Another way to solution

let month = [

  {
    name: 'November',
    order: 11
  },


  {
    name: 'October',
    order: 10
  },

  {
    name: 'May',
    order: 5
  },

  {
    name: 'April',
    order: 4
  },
  {
    name: 'march',
    order: 3
  }, {
    name: 'december',
    order: 12
  }, {
    name: 'january',
    order: 1
  }, {
    name: 'july',
    order: 7
  }, {
    name: 'september',
    order: 9
  }, {
    name: 'february',
    order: 2
  }
];

month.sort(function (a, b) {
  // if (a.order < b.order) {
  //     return -1;
  // }

  return a.order - b.order;
});
console.log(month);


// solved the same solution  using sort the month alphabetically

let unSortedMonth = ['august', 'september', 'january', 'february', 'october', 'march', 'november', 'april', 'december', 'may', 'july', 'june'];

let alphabetically = unSortedMonth.sort();
console.log(alphabetically);


// ......Assignment II.........
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
  }, {
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


// showing all data

function showData(event) {
  event.preventDefault();
  let display = document.getElementById('display');
  display.innerHTML += '';

  display.innerHTML = `<table>
    <tr> 
      <th>  SN.</th> 
      <th>  Name</th>
      <th>  Type </th>
      <th>  Rank </th>
   </tr>

</table>`;
  console.table(myData);
  for (let i = 0; i < myData.length; i++) {
    // console.log('index', i);

    display.innerHTML +=

      `<table>
        
        <tr>
            <td>${i + 1}</td>
            <td>${myData[i].name}</td>
            <td>${myData[i].type} </td> 
            <td>${myData[i].rank}</td>
       </tr>
    </table>
    
    <style>
    table {
        border-collapse: collapse;
        width:50%;
        margin: 0 auto;
        
      }
      
      td, th {
       border:1px solid white;
        text-align: center;
        padding: .5rem;
      }
      th {
        background-color:#245015;
        font-weight:bold;
      }
      
      td:nth-child(even) {
        background-color: #6D463E;
        color:white;
        font-weight:bold;
      }
      td:nth-child(odd) {
        background-color: yellow;
        font-weight:bold;
      }
    
    </style>
    
    `;
  }
}






// sorted  by Name 
function sortName(event) {
  event.preventDefault();
  let copyOfName = myData.slice(); // copy from the  MyData
  display.innerHTML = '';
  display.innerHTML += `
    <h2> Sorted Data by Name</h2>
    
    <table>
    <tr> 
      <th>  SN.</th> 
      <th>  Name</th>
      <th>  Type </th>
      <th>  Rank </th>
   </tr>

</table>`;
  copyOfName.sort(function (a, b) {
    if (a.name.toUpperCase() < b.name.toUpperCase()) {
      return -1;
    } else {
      return 1;
    }

  });
  //console.log(myData);
  for (let i = 0; i < copyOfName.length; i++) {
    display.innerHTML += `<table>
        
        <tr>
            <td>${i + 1}</td>
            <td>${copyOfName[i].name}</td>
            <td>${copyOfName[i].type} </td> 
            <td>${copyOfName[i].rank}</td>
       </tr>
    </table>
    
    <style>
    table {
        border-collapse: collapse;
        width:50%;
        margin: 0 auto;
        
      }
      
      td, th {
       border:1px solid white;
        text-align: center;
        padding: .5rem;
      }
      th {
        background-color:#245015;
        font-weight:bold;
      }
      
      td:nth-child(even) {
        background-color: #6D463E;
        color:white;
        font-weight:bold;
      }
      td:nth-child(odd) {
        background-color: yellow;
        font-weight:bold;
      }
    
    </style>
    
    `;
  }
}



// sorted  by Type
function sortType(event) {
  event.preventDefault();
  display.innerHTML += '';

  display.innerHTML += `
    <h2> Sorted Data by Type</h2>
    
    <table>
    <tr> 
      <th>  SN.</th> 
      <th>  Name</th>
      <th>  Type </th>
      <th>  Rank </th>
   </tr>

</table>`;
  let copyOfType = myData.slice(); // copy from main Data

  copyOfType.sort(function (a, b) {
    if (a.type.toLowerCase() < b.type.toLowerCase()) {
      return -1;
    } else {
      return 1;
    }

  });
  //console.log(myData);
  for (let i = 0; i < copyOfType.length; i++) {
    display.innerHTML +=
      `<table>
        
        <tr>
            <td>${i + 1}</td>
            <td>${copyOfType[i].name}</td>
            <td>${copyOfType[i].type} </td> 
            <td>${copyOfType[i].rank}</td>
       </tr>
    </table>
    
    <style>
    table {
        border-collapse: collapse;
        width:50%;
        margin: 0 auto;
        
      }
      
      td, th {
       border:1px solid white;
        text-align: center;
        padding: .5rem;
      }
      th {
        background-color:#245015;
        font-weight:bold;
      }
      
      td:nth-child(even) {
        background-color: #6D463E;
        color:white;
        font-weight:bold;
      }
      td:nth-child(odd) {
        background-color: yellow;
        font-weight:bold;
      }
    
    </style>
    
    `;
  }
}

// sorted  by Rank
function sortRank(event) {
  event.preventDefault();
  display.innerHTML += '';

  display.innerHTML += `
    <h2> Sorted Data by Rank</h2>
    <table>
    <tr> 
      <th>  SN.</th> 
      <th>  Name</th>
      <th>  Type </th>
      <th>  Rank </th>
   </tr>

</table>`;

  let copyOfRank = myData.slice(); // copy from main Data

  copyOfRank.sort(function (a, b) {
    if (a.rank < b.rank) {
      return -1;
    } else {
      return 1;
    }

  });
  //console.log(myData);
  for (let i = 0; i < copyOfRank.length; i++) {
    display.innerHTML += `<table>
        
        <tr>
            <td>${i + 1}</td>
            <td>${copyOfRank[i].name}</td>
            <td>${copyOfRank[i].type} </td> 
            <td>${copyOfRank[i].rank}</td>
       </tr>
    </table>
    
    <style>
    table {
        border-collapse: collapse;
        width:50%;
        margin: 0 auto;
        
      }
      
      td, th {
       border:1px solid white;
        text-align: center;
        padding: .5rem;
      }
      th {
        background-color:#245015;
        font-weight:bold;
      }
      
      td:nth-child(even) {
        background-color: #6D463E;
        color:white;
        font-weight:bold;
      }
      td:nth-child(odd) {
        background-color: yellow;
        font-weight:bold;
      }
    
    </style>
    
    `;
  }
}