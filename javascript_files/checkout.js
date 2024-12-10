import { cart } from "../data/cart.js";
import { products } from "../data/products.js";
import deleveryIdOptions from "../data/deliveryIdOptions.js";

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
                ${deliveryOption(deleveryIdOptions, radioName)}
                
                
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


  function deliveryOption(deleveryIdOptions , radioName) {
    
    
    let html = "";
    deleveryIdOptions.forEach((option) => {
      const today = dayjs();
      let input = '';
      const deliveryDate = today.add(option.deleveryTime, 'day');
      const formattedDate = deliveryDate.format('dddd, MMMM D');

      if (option.price === 0) {
        option.innerHTML = "Free";
        input = 'checked';
      }else{
        option.innerHTML = `$${option.price} - shipping`
      }

      const deliveryOptionHtml = `
        <div class="delivery-option">
          <input type="radio" 
            class="delivery-option-input" ${input}
            name="delivery-option-${radioName}">
          <div>
            <div class="delivery-option-date">
              ${formattedDate}
            </div>
            <div class="delivery-option-price">
              ${option.innerHTML}
            </div>
          </div>
        </div>
      `;
      
      
      html += deliveryOptionHtml;
      console.log(deleveryIdOptions);
      
      
      
    });
    return html;
    
    
  }

  






// Using dayjs() will give you the current date and time
// const now = dayjs();
// console.log(now.format()); // '2024-12-09T12:34:56+00:00'
// const now = dayjs();
// console.log(now.format('YYYY-MM-DD')); // '2024-12-09'
// console.log(now.format('dddd, MMMM D')); // 'December 9, 2024'
// console.log(now.format('dddd, MMMM D, YYYY h:mm A')); // 'Monday, December 9, 2024 12:34 PM'










