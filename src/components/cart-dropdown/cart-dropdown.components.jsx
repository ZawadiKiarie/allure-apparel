import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContext } from '../../contexts/cart-dropdown.context';

import Button from '../button/button.components';
import CartItem from '../cart-item/cart-item.component';

import {CartDropDownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles'

const CartDropdown = () => {
  const { cartItems, toggleCartDropdown } = useContext(CartDropdownContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout')
    toggleCartDropdown()
  }
  return(
    <CartDropDownContainer>
      <CartItems>
        {
          cartItems.length 
          ? cartItems.map(item => (<CartItem key={item.id} cartItem={item} />))
          : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )
        }
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Checkout</Button>

    </CartDropDownContainer>
  )
}

export default CartDropdown;