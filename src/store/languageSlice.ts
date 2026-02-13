import { createSlice } from "@reduxjs/toolkit";

type LangCode = "fr" | "en";

type LangState = {
  lang: LangCode;
};

const langInitialState: LangState = {
  lang: "fr",
};

export const langSlice = createSlice({
  name: "lang",
  initialState: langInitialState,
  reducers: {
    switchLang: (state) => {
      state.lang = state.lang === "fr" ? "en" : "fr";
    },
  },
});


export const {switchLang} = langSlice.actions
