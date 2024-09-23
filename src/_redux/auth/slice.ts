import { createReducer } from '@reduxjs/toolkit';
import IUser from 'types/user.type';
import {login, logout, registerUser} from "./action";

export interface IAuthState {
  loading: boolean;
  userInfo?: IUser;
  userToken: string;
  error: string | null;
  success: boolean;
}

const initialState: IAuthState = {
  loading: false,
  userInfo: undefined,
  userToken: '',
  error: null,
  success: false,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(registerUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.userInfo = payload as IUser;
    })
    .addCase(registerUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload as string;
    });
  builder
    .addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(login.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.userInfo = payload.user as IUser;
      state.userToken = payload.token;

      localStorage.setItem('token', payload.token);
    })
    .addCase(login.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload as string;
    })
    .addCase(logout, (state) => {
      state.loading = false;
      state.userInfo = undefined;
      state.userToken = '';
      state.error = null;
      state.success = false;
      localStorage.removeItem('token');
    });
});

export default authReducer;
