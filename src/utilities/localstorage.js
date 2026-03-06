/**
 *1.to get something from local storage, you will get it as a string
 2. convert this to javascript object/array.
 * */

const getCartFromLocalStorage = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
  }
  return [];
};

const saveCartToLocalStorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

// adding cart value and saving new cart to local storage
const addItemToCartLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  const newCart = [...cart, id];

  //   saving new cart to local storage
  saveCartToLocalStorage(newCart);
};

const removeFromLocalStorage = (id) => {
  const storedCart = getCartFromLocalStorage();
  const remainingCart = storedCart.filter((storedId) => storedId !== id);
  saveCartToLocalStorage(remainingCart);
};

export {
  getCartFromLocalStorage as getStoreCart,
  addItemToCartLocalStorage as addIdToStoredCart,
  removeFromLocalStorage as removeFromCart,
};
