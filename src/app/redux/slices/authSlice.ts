import  Cookies from 'js-cookie';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  refreshExpired: string;
  accessToken: string |null;
}

const initialState: AuthState = {
  refreshExpired: "",
  accessToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshExpired = action.payload.refreshExpired;
      Cookies.set('exp',state.refreshExpired, {expires:1});
      console.log(JSON.stringify(state));
    },
    logout: (state) => {
      state.refreshExpired = "";
      state.accessToken = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
