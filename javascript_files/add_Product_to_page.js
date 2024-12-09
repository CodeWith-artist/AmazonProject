import { cart, saveCartToLocalStorage } from "../data/cart.js";
import { products } from "../data/products.js";
import { adding_products_to_cart } from "../data/cart.js";


// adding products to cart through javascript
function AddingProductsToPage() {
  let allProducts = "";

  products.forEach((product) => {
    const item_html = `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart-btn" data-product-id="${
            product.id
          }">
            Add to Cart
          </button>
        </div>
    `;

    allProducts += item_html;
  });

  const productGrid = document.querySelector(".products-grid");
  productGrid.innerHTML = allProducts;
}
AddingProductsToPage();

// adding products to cart
<<<<<<< HEAD
adding_products_to_cart()
=======

function adding_products_to_cart() {
  const addToCartButton = document.querySelectorAll(".js-add-to-cart-btn");

  addToCartButton.forEach((btn) => {
    btn.addEventListener("click", () => {
      const productId = btn.dataset.productId;
      let matchingItem;
      cart.forEach((item) => {
        if (productId === item.id) {
          matchingItem = item;
        }
      });

        if (matchingItem) {
          matchingItem.quantity += 1;
        } else {
          cart.push({
            id: productId,
            quantity: 1,
          });
          
        }
        saveCartToLocalStorage();
        

        
      
    });
  });
}

adding_products_to_cart();
>>>>>>> bb211051cf6cf6ac150dfd3b0215dc1836a9d82e
