import { cart } from "../data/cart.js";
import { products } from "../data/products.js";
<<<<<<< HEAD
let matchingItem;
let quantity;
let totalCartItem = "";
function AddingCartProducts() {
  cart.forEach((item) => {
    products.forEach((product) => {
      if (item.id === product.id) {
        matchingItem = product;
        quantity = item;
      }
    });
  

  const cart_item_html = `
      <div class="cart-item-container">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingItem.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingItem.name}
                </div>
                <div class="product-price">
                  $${((matchingItem.priceCents) / 100).toFixed(2)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${quantity.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-1">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-1">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-1">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  `;

  totalCartItem = cart_item_html;
});

  const orderSummary = document.querySelector(".order-summary");
  orderSummary.innerHTML = totalCartItem;
}
AddingCartProducts();
=======

const now = dayjs();
let formattedDate = now.format('dddd, MMMM D')
function AddingCartProducts(formattedDate) {
    let allProducts = "";
    cart.forEach((item) => {
        let matchingItem=[]
        let cartItem=[]
        let radioName = `delivery-option-${item.id}`
        products.forEach(product => {
            if (item.id === product.id) {
                matchingItem.push(product);
                cartItem.push(item);
            }
        })
        
       matchingItem.forEach((item) => {
            const item_html = `
                <div class="cart-item-container">
            <div class="delivery-date">
              Delivery date: ${formattedDate}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${item.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${item.name}
                </div>
                <div class="product-price">
                  $${(item.priceCents / 100).toFixed(2)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem[0].quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="${radioName}">
                  <div>
                    <div class="delivery-option-date">
                      Saturday, June 18
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="${radioName}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="${radioName}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            `;
        
            allProducts += item_html;
          });
        
          const orderSummary = document.querySelector(".order-summary");
          orderSummary.innerHTML = allProducts;
          
    })
  
    
  }
  AddingCartProducts(formattedDate)








// Using dayjs() will give you the current date and time
// const now = dayjs();
// console.log(now.format()); // '2024-12-09T12:34:56+00:00'
// const now = dayjs();
// console.log(now.format('YYYY-MM-DD')); // '2024-12-09'
// console.log(now.format('dddd, MMMM D')); // 'December 9, 2024'
// console.log(now.format('dddd, MMMM D, YYYY h:mm A')); // 'Monday, December 9, 2024 12:34 PM'










>>>>>>> bb211051cf6cf6ac150dfd3b0215dc1836a9d82e
