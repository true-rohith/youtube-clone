import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    open: true,
    video: [],
    category: "All",
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
  },
});
export const { toggleSidebar, setHomeVideo, setCatergory } = appSlice.actions;
export default appSlice.reducer;
