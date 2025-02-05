import { configureStore } from '@reduxjs/toolkit';
import {authReducer} from '@features/auth';
import { appThemeReducer } from '@features/theme';

export const store = configureStore({
  reducer : {
    auth : authReducer,
    theme : appThemeReducer,
  }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

