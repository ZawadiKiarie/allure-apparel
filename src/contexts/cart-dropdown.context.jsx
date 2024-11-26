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

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if(existingCartItem.quantity === 1){
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

const clearCartItem = (cartItems, cartItemToClear) =>  cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)

export const CartDropdownContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  totalCartItems: 0,
  totalPrice: 0
})

export const CartDropdownProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((accumulator, cartItem) => {
      return accumulator + cartItem.quantity
    }, 0)
    setTotalCartItems(newCartCount);
  }, [cartItems])

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((accumulator, cartItem) => {
      return accumulator + (cartItem.quantity * cartItem.price)
    }, 0)
    setTotalPrice(newTotalPrice);
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const toggleCartDropdown = () => {
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
  }

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  }

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  }

  const value = { 
    isCartOpen, 
    setIsCartOpen, 
    addItemToCart, 
    cartItems, 
    totalCartItems, 
    toggleCartDropdown, 
    totalPrice, 
    removeItemFromCart, 
    clearItemFromCart 
  }

  return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
}