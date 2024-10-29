import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import type { Starship } from "@/types";
import type { PayloadAction } from "@reduxjs/toolkit";

const starshipSlice = createSlice({
  name: "starshipSlice",
  initialState: initialState,
  reducers: {
    getAllStarshipsRequest: (state) => {
      state.isLoading = true;
    },
    getAllStarshipsSuccess: (
      state,
      action: PayloadAction<{ starships: Starship[] }>
    ) => {
      state.starships = action.payload.starships;
      state.isLoading = false;
    },
    getAllStarshipsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

export const {
  getAllStarshipsRequest,
  getAllStarshipsSuccess,
  getAllStarshipsFailure,
} = starshipSlice.actions;

export default starshipSlice.reducer;
