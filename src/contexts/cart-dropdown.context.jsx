import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    //loop through cart items and find if cartItems id match productToAdd id to determine if product exists in cart
    const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // If found, return a new array with the updated quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // If not found, add the new product to the cart with a quantity of 1
  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const CartDropdownContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalCartItems: 0
})

export const CartDropdownProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((accumulator, cartItem) => {
      return accumulator + cartItem.quantity
    }, 0)
    setTotalCartItems(newCartCount);
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, totalCartItems }

  return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
}