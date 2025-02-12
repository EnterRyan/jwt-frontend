import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import appThemeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer : {
    auth : authReducer,       //토큰 부분
    theme : appThemeReducer,  //App 태마 부분
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

