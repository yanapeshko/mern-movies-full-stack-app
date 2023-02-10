import { configureStore } from "@reduxjs/toolkit";
import { themeModeSlice } from "./features/themeModeSlice.js";
import userSlice from "./features/userSlice.js";

const store = configureStore({
  reducer: {
    user: userSlice,
    themeMode: themeModeSlice,
  },
});

export default store;
