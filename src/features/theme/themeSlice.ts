import { createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "@shared/utils/handleCookie";

const savedTheme = getCookie("AppTheme")||"LightMode";

const initialState = {
  darkMode: savedTheme
};

const themeSlice = createSlice({
  name: "appTheme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      const newTheme = state.darkMode === "DarkMode" ? "LightMode" : "DarkMode";
      setCookie("AppTheme", newTheme, 1); // 쿠키에도 문자열 저장
      return { ...state, darkMode: newTheme };
    },
    setThemeFromCookie: (state, action) => {
      state.darkMode = action.payload; // ✅ 쿠키에서 읽은 값을 강제 설정 (불필요한 토글 방지)
    },
  },
});

export const { toggleDarkMode, setThemeFromCookie  } = themeSlice.actions;
export default themeSlice.reducer;
