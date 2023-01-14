import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import CatgoriesPreview from "../categories-preview/categories-preview.component";
import Catgory from "../category/catagory.component";
import { fetchCategoriesAsync } from "../../store/categories/category.action";
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CatgoriesPreview />} />
      <Route path=":category" element={<Catgory />} />
    </Routes>
  );
};

export default Shop;
