import { combineReducers } from "@reduxjs/toolkit";
import heroReducer from "./heroSlice/heroSlice";

const rootReducer = combineReducers({
  heroSlice: heroReducer,
});

export default rootReducer;
