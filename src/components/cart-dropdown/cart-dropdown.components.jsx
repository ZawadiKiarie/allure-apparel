import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContext } from '../../contexts/cart-dropdown.context';

import Button from '../button/button.components';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems, toggleCartDropdown } = useContext(CartDropdownContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout')
    toggleCartDropdown()
  }
  return(
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {
          cartItems.map(item => (<CartItem key={item.id} cartItem={item} />))
        }
      </div>
      <Button onClick={goToCheckoutHandler}>Checkout</Button>

    </div>
  )
}

export default CartDropdown;