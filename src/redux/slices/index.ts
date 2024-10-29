import { combineReducers } from "@reduxjs/toolkit";
import heroReducer from "@/redux/slices/heroSlice/heroSlice";
import currentHeroReducer from "@/redux/slices/currentHeroSlice/currentHeroSlice";
import filmReducer from "@/redux/slices/filmSlice/filmSlice";
import starshipReducer from "@/redux/slices/starshipSlice/starshipSlice";

const rootReducer = combineReducers({
  heroSlice: heroReducer,
  currentHeroSlice: currentHeroReducer,
  filmSlice: filmReducer,
  starshipSlice: starshipReducer,
});

export default rootReducer;
