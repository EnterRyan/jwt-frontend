import { configureStore } from '@reduxjs/toolkit';
import {authReducer} from '@features/auth';
import { appThemeReducer } from '@features/theme';

export const store = configureStore({
  reducer : {
    auth : authReducer,       //인증인가 부분
    theme : appThemeReducer,  //App 태마 부분
  }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

