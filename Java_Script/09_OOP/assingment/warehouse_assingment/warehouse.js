function wareInfoSubmit() {

    let productID = document.getElementById('productID').value;
    let productName = document.getElementById('productName').value;
    let arrivalDate = document.getElementById('arrivalDate').value;
    let productSection = document.getElementById('productSection').value;
    let productPrice = document.getElementById('productPrice').value;

    let productBrand = document.getElementById('productBrand').value;
    let year = document.getElementById('year').value;
    let productDescription = document.getElementById('productDescription').value;


    // Categories
    let Catagories;
    if (document.getElementById('electronics').checked) {
        Catagories = document.getElementById('electronics').innerHTML.value;
    } else if (document.getElementById('books').checked) {
        Catagories = document.getElementById('books').innerHTML.value;
    } else if (document.getElementById('clothes').checked) {
        Catagories = clothes.innerHTML.value;
    } else if (document.getElementById('furniture').checked) {
        Catagories = furniture.innerHTML.value;
    } else if (document.getElementById('appliance').checked) {
        Catagories = appliance.innerHTML.value;
    }

    //

    let output = document.getElementById('output');

    output.innerHTML = `<table>
          <tr> 
            <th>  ID</th> 
            <th>  Name</th>
            <th>  Arrival Date</th>
            <th>  Section</th>
            <th>  Price(€) </th>
            <th>  Brand</th>
            <th>  Year</th>
            <th>  Description</th>
            <th>  Catagories </th>


         </tr>
  
  </table>`;
    output.innerHTML +=
        `<table>
        <tr>
            <td> ${productID}</td>
            <td>${productName}</td>
            <td> ${arrivalDate} </td> 
            <td> ${productSection}</td>
            <td> ${productPrice}€</td>
             <td> ${productBrand}</td>
            <td> ${year}</td>
            <td> ${productDescription}</td>
            <td> ${Catagories}</td>
       </tr>
    </table>
    
    <style>
    table {
        border-collapse: collapse;
        width:100%;
      }
      
      td, th {
          border:1px solid white;
        text-align: center;
        padding: .75rem;
      }
      th {
        background-color:#245015;
        font-weight:bold;
      }
      
    </style>
    
    `

}