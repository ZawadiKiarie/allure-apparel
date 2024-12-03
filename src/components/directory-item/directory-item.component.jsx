import { useNavigate } from "react-router-dom";
import { DirectoryItemContainer, BackgroundImage, DirectoryItemBody, Heading, Text } from './directory-item.styles'

const DirectoryItem = ({ category: {imageUrl, title, route} }) => {
  const navigate = useNavigate();

  const navigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryItemBody onClick={navigateHandler} >
        <Heading>{title}</Heading>
        <Text>Shop Now</Text>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem;