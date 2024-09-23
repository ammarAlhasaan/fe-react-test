import {createAction, createAsyncThunk} from '@reduxjs/toolkit'
import {createUser, userLogin} from "api";
import {IUser} from 'types';


export const registerUser: any = createAsyncThunk(
  'auth/registerUser',
  async (userData: IUser | Omit<IUser, 'id'>, thunkAPI) => {
    try {
      const newUser = await createUser(userData);
      return newUser;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to register user';
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const login: any = createAsyncThunk(
  'auth/login',
  async (userData: Pick<IUser, 'email' | 'password'>, thunkAPI) => {
    try {
      const user = await userLogin(userData);
      return user;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to register user';
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const logout = createAction('auth/logout');
