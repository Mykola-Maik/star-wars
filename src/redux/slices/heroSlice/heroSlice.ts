import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "@/redux/slices/heroSlice/initialState";
import type { Hero } from "@/types";
import type { PayloadAction } from "@reduxjs/toolkit";

const heroSlice = createSlice({
  name: "heroSlice",
  initialState: initialState,
  reducers: {
    getAllHeroesRequest: (state, _action: PayloadAction<{ page: number }>) => {
      state.isLoading = true;
    },
    getAllHeroesSuccess: (
      state,
      action: PayloadAction<{ heroes: Hero[]; count: number }>
    ) => {
      state.totalCount = action.payload.count;
      state.heroes = action.payload.heroes;
      state.isLoading = false;
    },
    getAllHeroesFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

export const { getAllHeroesRequest, getAllHeroesSuccess, getAllHeroesFailure } =
  heroSlice.actions;

export default heroSlice.reducer;
