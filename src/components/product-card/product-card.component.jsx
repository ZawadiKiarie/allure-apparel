import { useContext } from 'react';
import { CartDropdownContext } from '../../contexts/cart-dropdown.context';

// import { Image, ProductCardContainer, Footer, ProductCardName, ProductCardPrice } from './product-card.styles';
import {ProductCardContainer, Footer, ProductCardName, ProductCardPrice} from './product-card.styles'
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.components";

const ProductCard = ({product}) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartDropdownContext);

  const addProductToCart = () => {
    addItemToCart(product)
  }

  return(
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <ProductCardName>{name}</ProductCardName>
        <ProductCardPrice>{price}</ProductCardPrice>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
    </ProductCardContainer>
  )
}

export default ProductCard;