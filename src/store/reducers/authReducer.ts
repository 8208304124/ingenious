/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
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

export const initialState: AuthStateType = {
  isAuthenticated: false,
  Userdata: [],
  loading: false,
  error: null,
  token: '',
};

export const callLogin = createAsyncThunk(
  'user/login',
  async (payload: loginPayloadType, { rejectWithValue }) => {
    try {
      const resData = await post(payload.requestBody, payload.setLoading, payload.setAlertOptions);
      return resData;
    } catch (error: any) {
      if (error.response && error.response.data) {
        // If error response from server
        return rejectWithValue(error.response.data);
      } else {
        // If other type of error (network, etc.)
        return rejectWithValue('An error occurred during login.');
      }
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      const token = action.payload;
      state.token = token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(callLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(callLogin.fulfilled, (state, action: PayloadAction<UserInfo>) => {
        const response = action.payload;
        const token = response.token;
        state.loading = false;
        state.Userdata.push(response);
        state.token = token;
        if (token) {
          state.isAuthenticated = true;
        }
      })
      .addCase(callLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || 'Failed to fetch the User data.';
      });
  },
});

export const authReducer = authSlice.reducer;
export const { setAuthToken } = authSlice.actions;
