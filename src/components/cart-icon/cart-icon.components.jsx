import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';

const CartIcon = () => {
  const { totalCartItems, toggleCartDropdown } = useContext(CartDropdownContext);

  return(
    <CartIconContainer onClick={toggleCartDropdown}>
      <ShoppingIcon />
      <ItemCount>{totalCartItems}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;