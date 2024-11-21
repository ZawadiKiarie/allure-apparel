import Button from '../button/button.components';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  return(
    <div className='cart-dropdown-container'>
      <div className='cart-items' />
      <Button>Go to heckout</Button>
    </div>
  )
}

export default CartDropdown;