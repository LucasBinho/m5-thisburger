import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { cartReducer } from "./Reducers";
import { listCardapio } from "../services/Request";
import ifsalada from "../assets/if-salada.png";
import backbacon from "../assets/back-bacon.png";
import elsetudo from "../assets/else-tudo.png";
import xbug from "../assets/x-bug.png";
import frontegg from "../assets/front-egg.png";

const images = [xbug, backbacon, frontegg, ifsalada, elsetudo];

const Cart = createContext();

export const cardapio = async function() {
  await listCardapio();
  cardapio.map((element, index) => {
    element.image = images[index];
    element.qty = 0;
  }
  );
};


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


