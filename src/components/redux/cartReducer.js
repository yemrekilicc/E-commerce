import initialState from "./initialState";

export default function cartReducer(state = initialState, action) {
  var newTodos;
  switch (action.type) {
    case 'added': {
        return {cart:[...state.cart, {
          id: action.id,
          image: action.image,
          name: action.name,
          price: action.price,
          size: action.size,
          quantity: action.quantity,
        }]}
      }
      case 'changed': {
        return state.cart.map(t => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      }
      case 'deleted': {
        var temp=state.cart.filter(t => t.id !== action.id);
        return {cart:temp};
      }
      default: {
        return state;
      }
  }
}