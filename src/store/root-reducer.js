import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart:cartReducer
});
