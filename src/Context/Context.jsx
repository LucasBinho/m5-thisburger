import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { cartReducer } from "./Reducers";
import cardapio from "./Menu";


const Cart = createContext();


const Context = ({ children }) => {
  const data = {
    products: cardapio,
  };

  const [state, dispatch] = useReducer(cartReducer, {
    data,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
