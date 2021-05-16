const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, {
        ...action.product,
        quantity: 1
      }];
    case 'UPDATE_QUANTITY':
      if (action.payload.quantity > 0) {
        return state.map(item => item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item)
      } else {
        return [...state]
      }
    default:
      return state;
  }
};

export default cart;
