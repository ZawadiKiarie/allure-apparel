import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { setIsCartOpen, totalCartItems } = useContext(CartDropdownContext);

  const toggleCartDropdown = () => {
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
  }

  return(
    <div className='cart-icon-container' onClick={toggleCartDropdown}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{totalCartItems}</span>
    </div>
  )
}

export default CartIcon;