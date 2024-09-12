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

// Initial state definition
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
    .addCase(login, (state, action) => {
      state.loading = false;
      state.error = null;
      state.userInfo = action.payload.userInfo;
      state.userToken = action.payload.userToken;
    })
    .addCase(logout, (state) => {
      state.loading = false;
      state.userInfo = undefined;
      state.userToken = '';
      state.error = null;
      state.success = false;
    });
});

export default authReducer;
