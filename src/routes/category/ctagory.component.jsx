import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import "./category.styles.scss";
import ProductCard from "../../components/product-card/product-card.comonent";

const Catgory = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <div className="category-container">
      {products &&
        products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </div>
  );
};

export default Catgory;
