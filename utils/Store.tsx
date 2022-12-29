import React, { createContext, useReducer } from "react";

interface AppContextInterface {
  name: string;
  slug: string;
  category: string;
  image: string;
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  countInStock: number;
  description: string;
  isFeatured: boolean;
  banner: string;
}

export const Store = createContext<AppContextInterface | null>(null);

const initialState = {
  cart: { cartItems: [] },
};

function reducer({ state, action }: { state: any; action: any }) {
  switch (action.type) {
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        ({ item }: { item: any }) => item.slug === newItem.slug
      );
      const cartItems = existItem
        ? state.cart.cartItems.map(({ item }: { item: any }) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
