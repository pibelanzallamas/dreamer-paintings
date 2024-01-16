import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme";
import langReducer from "./lang";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    lang: langReducer,
  },
});

export default store;
