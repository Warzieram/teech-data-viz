import { configureStore } from "@reduxjs/toolkit";
import { langSlice } from "./languageSlice";

export const store = configureStore({
  reducer: {
    lang: langSlice.reducer,
  },
});

export type RootType = ReturnType<typeof store.getState>;
