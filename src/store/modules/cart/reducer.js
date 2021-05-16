const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, {
        ...action.product,
        quantity: 1
      }];
    case 'UPDATE_CART':
      return [...state, action.payload];
  
    default:
      return state;
  }
};

export default cart;
