import { Routes, Route } from "react-router-dom";

import CatgoriesPreview from "../categories-preview/categories-preview.component";
import Catgory from "../category/catagory.component";
import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CatgoriesPreview />} />
      <Route path=":category" element={<Catgory/>} />
    </Routes>
  );
};

export default Shop;
