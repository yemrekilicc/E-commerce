import { createContext, useContext, useReducer } from 'react';
const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(
    cartReducer,
    initialCart
  );

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider
        value={dispatch}
      >
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

function cartReducer(cart, action) {
  switch (action.type) {
    case 'added': {
      return [...cart, {
        id: action.id,
        image: action.image,
        name: action.name,
        price: action.price,
        size: action.size,
        quantity: action.quantity,
      }];
    }
    case 'changed': {
      return cart.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return cart.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialCart = [

];
