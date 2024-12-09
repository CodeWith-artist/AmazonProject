export let cart = JSON.parse(localStorage.getItem("cart")) || [];

export const saveCartToLocalStorage = () => localStorage.setItem("cart", JSON.stringify(cart));