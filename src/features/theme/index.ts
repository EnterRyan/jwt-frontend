import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "@shared/utils/handleCookie";

const initialState ={
  darkMode : getCookie('AppTheme')==='DarkMode',
}

const themeSlice = createSlice({
  name : 'appTheme',
  initialState,
  reducers:{
    setTheme : (state)=>{
      state.darkMode = !state.darkMode;
    }
  }
});