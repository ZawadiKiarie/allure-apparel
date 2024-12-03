import ProductCard from "../../components/product-card/product-card.component";
import { CategoryPreviewContainer, CategoryPreviewTitle, CategoryPreviewSection } from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewTitle to={title}>{title.toUpperCase()}</CategoryPreviewTitle>
      </h2>
      <CategoryPreviewSection>
        {
          products.filter((_, idx) => idx < 4)
          .map((product) => <ProductCard key={product.id} product={product} />)
        }
      </CategoryPreviewSection>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview;