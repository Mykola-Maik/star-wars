import { Film, Hero, Starship } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const currentHeroSlice = createSlice({
  name: "currentHeroSlice",
  initialState: initialState,
  reducers: {
    getCurrentHeroRequest: (
      state,
      _action: PayloadAction<{ heroId: string }>
    ) => {
      state.isLoading = true;
    },
    getCurrentHeroSuccess: (state, action: PayloadAction<Hero>) => {
      state.isLoading = false;
      state.hero = action.payload;
    },
    getCurrentHeroFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    removeCurrentHero: (state) => {
      state.hero = null;
    },
    getCurrentHeroFilmsRequest: (
      state,
      _action: PayloadAction<{ heroId: string }>
    ) => {
      state.isLoading = true;
    },
    getCurrentHeroFilmsSuccess: (state, action: PayloadAction<Film[]>) => {
      state.isLoading = false;
      state.films = action.payload;
    },
    getCurrentHeroFilmsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    getCurrentHeroStarshipsRequest: (
      state,
      _action: PayloadAction<{ filmIds: number[]; heroId: string }>
    ) => {
      state.isLoading = true;
    },
    getCurrentHeroStarshipsSuccess: (
      state,
      action: PayloadAction<Starship[]>
    ) => {
      state.isLoading = false;
      state.starships = action.payload;
    },
    getCurrentHeroStarshipsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

export const {
  getCurrentHeroRequest,
  getCurrentHeroFailure,
  getCurrentHeroSuccess,
  removeCurrentHero,
  getCurrentHeroFilmsFailure,
  getCurrentHeroFilmsRequest,
  getCurrentHeroFilmsSuccess,
  getCurrentHeroStarshipsFailure,
  getCurrentHeroStarshipsRequest,
  getCurrentHeroStarshipsSuccess,
} = currentHeroSlice.actions;

export default currentHeroSlice.reducer;
