import './checkout.styles.scss';
import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
  const {cartItems, totalPrice} = useContext(CartDropdownContext)

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
        {cartItems.map((cartItem) => 
        <CheckoutItem key={cartItem.id} cartItem={cartItem} /> )}
      <span className='total'>Total: ${totalPrice}</span>
    </div>
  )
}

export default Checkout;