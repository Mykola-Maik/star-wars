import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import type { Film } from "@/types";
import type { PayloadAction } from "@reduxjs/toolkit";

const filmSlice = createSlice({
  name: "filmSlice",
  initialState: initialState,
  reducers: {
    getAllFilmsRequest: (state) => {
      state.isLoading = true;
    },
    getAllFilmsSuccess: (state, action: PayloadAction<{ films: Film[] }>) => {
      state.films = action.payload.films;
      state.isLoading = false;
    },
    getAllFilmsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

export const { getAllFilmsRequest, getAllFilmsSuccess, getAllFilmsFailure } =
  filmSlice.actions;

export default filmSlice.reducer;
