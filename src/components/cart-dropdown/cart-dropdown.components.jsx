import { useContext } from 'react';
import { CartDropdownContext } from '../../contexts/cart-dropdown.context';

import Button from '../button/button.components';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartDropdownContext)
  return(
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {
          cartItems.map(item => (<CartItem key={item.id} cartItem={item} />))
        }
      </div>
      <Button>Checkout</Button>
    </div>
  )
}

export default CartDropdown;