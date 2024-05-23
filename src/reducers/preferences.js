import { createSlice } from "@reduxjs/toolkit";

export const preferencesSlice = createSlice({
  name: "counter",
  initialState: {
    preferences: {"websites": [], "colors": [], "sizes":[], "categories": [], "products": []},
    userPreferences: {"websites": [], "sizes":[]},
  },
  reducers: {
    setPreferences: (state, action) => {
      state.preferences["websites"] = action.payload.websites;
      state.preferences["colors"] = action.payload.colors;
      state.preferences["sizes"] = action.payload.sizes;
      state.preferences["categories"] = action.payload.categories;
      state.preferences["products"] = action.payload.products;
    },
    setUserPreferences: (state, action) => {
      state.userPreferences["websites"] = action.payload.websites;
      state.userPreferences["sizes"] = action.payload.sizes;
    },
    },
  },
)

export const { setPreferences, setUserPreferences } = preferencesSlice.actions;

export const preferences = (state) => state.counter.preferences;
export const userPreferences = (state) => state.counter.userPreferences;

export default preferencesSlice.reducer;