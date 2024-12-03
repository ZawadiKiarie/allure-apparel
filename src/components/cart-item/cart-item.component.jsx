import { CartItemContainer, ItemDetails } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return(
    <CartItemContainer>
      <img style={{width: '30%'}} src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span style={{fontSize: '16px'}}>{name}</span>
        <span>{quantity} x ${price}</span>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem;