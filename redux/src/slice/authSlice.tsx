import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  
}

const initialState: AuthState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ username: string; password: string }>) => {
      state.isLoggedIn = true;
    },
    register: (state, action: PayloadAction<{ username: string; password: string }>) => {
      state.isLoggedIn = true;
    },
  },
});

export const { login, register } = authSlice.actions;
export default authSlice.reducer;
