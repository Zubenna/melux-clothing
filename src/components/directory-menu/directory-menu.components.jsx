import './directory-menu.styles.scss';
import CategoryItem from "../category-item/category-item.component";
import categories from '../../category-group/category-group.component';

const DirectoryMenu = () => {
return (
    <div className="categories-container">
    {categories.map((category) =>(
       <CategoryItem key={category.id} category={category} />  
    ))}
  </div>
)

}

export default DirectoryMenu;