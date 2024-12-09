export const cart = [
    {
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity : 3
    },
    {
        id : "54e0eccd-8f36-462b-b68a-8182611d9add",
        quantity: 4
    }
    
]


export function adding_products_to_cart() {
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
  
          console.log(cart);
        
      });
    });
  }