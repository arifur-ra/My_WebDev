let product = [];
let priceList = [];
let categories = [];


function addProduct() {
    // For Products
    let pro = document.getElementById('product').value;
    product.push(pro);
    console.log(product);

}

function addPrice() {
    // For Price List
    let price = parseFloat(document.getElementById('priceList').value);
    priceList.push(price);
    console.log(priceList);

}

function addCategory() {
    // For category 
    let category = document.getElementById('category').value;
    categories.unshift(category);
    console.log(categories);

}


function showProduct() {
    let productList = document.getElementById('showProduct');
    productList.innerHTML = ``; // delete old item and make a new list
    for (i = 0; i < product.length; i++) {
        productList.innerHTML += `<li> Product- ${i+1}: ${product[i]}</li>`;
        // productList.style.background = 'red';
        // productList.style.color = 'white';
        productList.style.padding = '1rem';
        productList.style.boxShadow = '0 0 4px red';


    }
}

function showPrice() {
    let priList = document.getElementById('showPrice');
    priList.innerHTML = ``;
    for (i = 0; i < priceList.length; i++) {
        priList.innerHTML += `<li> Price- ${i+1}: ${priceList[i]}</li>`;
        // priList.style.background = 'Black';
        //priList.style.color = 'white';
        priList.style.padding = '1rem';
        priList.style.boxShadow = '0 0 4px green';


    }

}

function showCategory() {
    let showCategory = document.getElementById('showCategory');
    showCategory.innerHTML = ``;
    for (i = 0; i < categories.length; i++) {
        showCategory.innerHTML += `<li> Category- ${i+1}: ${categories[i]}</li>`;
        // showCategory.style.background = 'green';
        //showCategory.style.color = 'white';
        showCategory.style.padding = '1rem';
        showCategory.style.boxShadow = '0 0 4px black';


    }

}