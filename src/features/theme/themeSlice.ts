import { createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "@shared/utils/handleCookie";

const initialState ={
  darkMode : getCookie('AppTheme')==='DarkMode',
}

const themeSlice = createSlice({
  name : 'appTheme',
  initialState,
  reducers:{
    toggleDarkMode : (state)=>{
      state.darkMode = !state.darkMode;
      const cookieValue = state.darkMode?"DarkMode":"LightMode";
      setCookie('AppTheme',cookieValue,1);
    }
  }
});

export const {toggleDarkMode} = themeSlice.actions;
export default themeSlice.reducer;