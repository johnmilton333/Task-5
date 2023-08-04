let body = document.querySelector('body');
let total = document.querySelector('.total');

let quantity = document.querySelector('.quantity');

let openShopping = document.querySelector('.shopping');
openShopping.addEventListener('click', () => {
  
    body.classList.add('active');
})

let closeShopping = document.querySelector('.closeShopping');
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})



let products = [
    {
        id: 1,
        name: 'limaaa',
        image: 'aaa.jpg',
        price: 250
    },
    {
        id: 2,
        name: 'Jackie',
        image: 'bbb.jpeg',
        price: 300
    },
    {
        id: 3,
        name: 'Bruce',
        image: 'ccc.webp',
        price: 360
    },
    {
        id: 4,
        name: 'Max',
        image: 'ddd.webp',
        price: 170
    },
    {
        id: 5,
        name: 'Shadow',
        image: 'eee.webp',
        price: 230
    },
    {
        id: 6,
        name: 'Zara',
        image: 'fff.jpg',
        price: 360
    },

    {
        id: 7,
        name: 'lucky',
        image: 'ggg.jpg',
        price: 500
    },

    {
        id: 8,
        name: 'Ramboo',
        image: 'hhh.jpeg',
        price: 196
    },

   
];

let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let listCards = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <h5 class="title py-2">${value.name}</h5>
            <div class="card-foot">
            <p class="price">$${value.price.toLocaleString()}</p>
            <a onclick="addToCard(${key})"><i class="bi bi-bag"></i></a>
            </div>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key) {


    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
        reloadCard();
    }

    else {
        alert("Product is already added to the cart.");
    }
}
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            
            <div><img class="cart-img" src="image/${value.image}" /></div>
            <div class='cart-product blue'>
                <div class="blue">${value.name}</div>
                <div  class='py-3'>$${value.price.toLocaleString()} </div>
                <div>
          
                <input type="number" class=" prod-increase colg" value="${value.quantity}" onchange="updateQuantity(${key}, this.value)">                  
                    
                </div>               
            </div>
            <a  onclick="removeFromCard(${key})" class="del-butn"><i class="bi bi-trash-fill"></i></a>
            `;

            listCard.appendChild(newDiv);
        }
    })
    total.innerText = '$' + totalPrice.toLocaleString();
    quantity.innerText = count;
}

function updateQuantity(key, newQuantity) {
    const parsedQuantity = parseInt(newQuantity);
  
    if (!isNaN(parsedQuantity) && parsedQuantity >= 0) {
      listCards[key].quantity = parsedQuantity;
      listCards[key].price = parsedQuantity * products[key].price;
  
      if (parsedQuantity === 0) {
        delete listCards[key];
      }
    } else {
      const inputElement = document.querySelector(`.cart-product[data-key="${key}"] input`);
      inputElement.value = listCards[key].quantity;
    }
  
    reloadCard();
  }

function removeFromCard(key) {
    if (listCards[key] != null) {
        delete listCards[key];
        reloadCard();
    }
}



function placeOrder() {
    alert("your order has been placed")
}