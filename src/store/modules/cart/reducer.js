const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if(!state.some(item => item.id === action.product.id)) {
        return [...state, { ...action.product, quantity: 1 }]
      } else {
        return state;
      }
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload);
    case 'UPDATE_QUANTITY':
      if (action.payload.quantity > 0) {
        return state.map(item => item.id === action.payload.id ?
          { ...item, quantity: action.payload.quantity } : item);
      } else {
        return [...state];
      }
    default:
      return state;
  }
};

export default cart;
