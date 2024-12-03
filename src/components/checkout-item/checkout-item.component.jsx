import { CheckoutItemContainer, ImageContainer, Image, CheckoutItemName, CheckoutItemQuantity, CheckoutItemPrice, Arrow, CheckoutItemQuantityValue, RemoveButton } from "./checkout-item.styles";
import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

const CheckoutItem = ({ cartItem }) => {
  const {name, imageUrl, price, quantity} = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartDropdownContext)

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return(
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <CheckoutItemName> {name} </CheckoutItemName>
      <CheckoutItemQuantity> 
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <CheckoutItemQuantityValue>{quantity}</CheckoutItemQuantityValue>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </CheckoutItemQuantity>
      <CheckoutItemPrice> {price} </CheckoutItemPrice>
      <RemoveButton onClick={clearItemHandler} >&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem;