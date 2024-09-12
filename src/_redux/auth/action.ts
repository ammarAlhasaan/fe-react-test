import {createAction, createAsyncThunk} from '@reduxjs/toolkit'
import {createUser} from "api";
import {IUser} from 'types';


export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData: Partial<IUser>, thunkAPI) => {
    try {
      const newUser = await createUser(userData);
      return newUser;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to register user';
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const login = createAction<{ userInfo: Partial<IUser>; userToken: string }>('auth/login');
export const logout = createAction('auth/logout');
