import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    open: true,
    video: [],
    category: "All",
    searchSuggestion: [],
  },
  reducers: {
    toggleSidebar: (state) => {
      state.open = !state.open;
    },
    setHomeVideo: (state, action) => {
      state.video = action.payload;
    },
    setCatergory: (state, action) => {
      state.category = action.payload;
    },
    setSearchSuggestion: (state, action) => {
      state.searchSuggestion = action.payload;
    },
  },
});
export const {
  toggleSidebar,
  setHomeVideo,
  setCatergory,
  setSearchSuggestion,
} = appSlice.actions;
export default appSlice.reducer;
