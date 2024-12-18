import { useContext, useState, useEffect, Fragment } from "react"
import { useParams } from "react-router-dom"
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, CategoryTitle } from "./category.styles";


const Category = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const  {category} = useParams();
  // const products = categoriesMap[category] || [];
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])
  
  return(
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products && products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CategoryContainer>
    </Fragment>
  )
}

export default Category;