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


// Filtering without football team

let filterData = myData.filter(function (item) {
    if (item.type !== 'football team') {
        return item;
    }

});

console.log('The filterData is:', filterData);


function filterType(event) {
    event.preventDefault();

    let result = document.getElementById('result');
    result.innerHTML = '';
    result.innerHTML = `
    <table>
    <tr> 
      <th>  SN.</th> 
      <th>  Name</th>
      <th>  Type </th>
      <th>  Rank </th>
   </tr>

</table>`;
    filterData.sort(function (a, b) {
        if (a.type.toUpperCase() < b.type.toUpperCase()) {
            return -1;
        } else {
            return 1;
        }

    });

    for (let i = 0; i < filterData.length; i++) {
        result.innerHTML += `<table>
        
        <tr>
            <td>${i + 1}</td>
            <td>${filterData[i].name}</td>
            <td>${filterData[i].type} </td> 
            <td>${filterData[i].rank}</td>
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
        color:white;
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