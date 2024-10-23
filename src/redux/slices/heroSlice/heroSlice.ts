import { createSlice } from "@reduxjs/toolkit";

const heroSlice = createSlice({
  name: "heroSlice",
  initialState: {
    heroes: [],
    isLoading: false,
    errors: "",
  },
  reducers: {},
});

export const {} = heroSlice.actions;

export default heroSlice.reducer;
