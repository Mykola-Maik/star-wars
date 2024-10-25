import { createSlice } from "@reduxjs/toolkit";

const currentHeroSlice = createSlice({
  name: "currentHeroSlice",
  initialState: {
    hero: null,
    isLoading: false,
    errors: "",
  },
  reducers: {},
});

export const {} = currentHeroSlice.actions;

export default currentHeroSlice.reducer;
