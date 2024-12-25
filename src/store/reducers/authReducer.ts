/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AlertOptionsType } from '../../components/elements/alert/Alert';
import { post } from '../../Services/HttpServices';
import { UserInfo } from '../../utility/interfaces/CommonInterfaces';
// import { isTokenExpired } from '../../utils/helperFunctions';
// import { DispatchDto } from '../../utils/types';

export type loginPayloadType = {
  requestBody: {};
  setLoading: (loading: boolean) => void;
  setAlertOptions: (options: AlertOptionsType) => void;
};

interface AuthStateType {
  isAuthenticated: boolean;
  Userdata: UserInfo[];
  loading: boolean;
  error: string | null;
  token: string | null;
}
export interface ApiResponseType<T> {
  data: T[];
}
export const initialState: AuthStateType = {
  isAuthenticated: false,
  Userdata: [],
  loading: false,
  error: null,
  token: '',
};

export const callLogin = createAsyncThunk('user/login', async (payload: loginPayloadType) => {
  try {
    const resData = await post(
      payload.requestBody,
      'api/auth/admin-register',
      payload.setLoading,
      payload.setAlertOptions
    );
    return resData;
  } catch (error: unknown) {
    return error;
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      const token = action.payload;
      state.token = token;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { setAuthToken } = authSlice.actions;
