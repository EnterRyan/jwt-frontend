import { createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "@shared/utils/handleCookie";

const savedTheme = getCookie("AppTheme"); // 쿠키에서 값을 읽어옴
const initialState = {
  darkMode: savedTheme
};

const themeSlice = createSlice({
  name: "appTheme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = state.darkMode === "DarkMode" ? "LightMode" : "DarkMode";
      setCookie("AppTheme", state.darkMode, 1); // 쿠키에도 문자열 저장
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
