// Using Object;

// Create  a function addProductItem():
// get the input form html using getElementID
// if any input value is empty show error
// else
/**
 * create object:{
 * name:getElementID.Value
 * price:getElementID.Value
 * categories:getElementID.Value
 *
 * }
 */
let products = [];

function addProductItem(event) {
  event.preventDefault();
  let product = document.getElementById("product").value; // for product
  let price = parseFloat(document.getElementById("priceList").value); // for price
  let category = document.getElementById("category").value; //  for categories

  if (product === "" || price === "" || category === "") {
    return console.error("Please fill all the Fields");
  }
  let productObject = {
    ProductName: product,
    ProductPrice: price,
    categories: category,
  };
  products.push(productObject);
  console.table("The Product Item Arry is:", products);
}


function showProductItem() {
  let showItem = document.getElementById("showProductItems");
  showItem.innerHTML = ``; // delete old item and make a new list
  showItem.innerHTML = `<table>
          <tr> 
            <th>  Product No.</th> 
            <th>  Product Name</th>
            <th>  Product Price(€) </th>
            <th>  Categories</th>
         </tr>
  
  </table>`;

  for (i = 0; i < products.length; i++) {
    showItem.innerHTML += `<table>
        
        <tr>
            <td>${i + 1}</td>
            <td>${products[i].ProductName}</td>
            <td>${products[i].ProductPrice}&nbsp € </td> 
            <td>${products[i].categories}</td>
       </tr>
    </table>
    
    <style>
    table {
        border-collapse: collapse;
        width: 100%;
        
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
      
      td:nth-child(even) {
        background-color: #6D463E;
        color:white;
        font-weight:bold;
      }
      td:nth-child(odd) {
        background-color: #black;
        color:white;
        font-weight:bold;
      }
    
    </style>
    
    `;
    showItem.style.padding = "1.5rem";
    showItem.style.boxShadow = "0 0 2px";
  }
}