export function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    product,
  };
}

export function updateQuantity(product) {
  return {
    type: 'UPDATE_QUANTITY',
    payload: product
  };
}

export function removeFromCart(product) {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product
  };
}
