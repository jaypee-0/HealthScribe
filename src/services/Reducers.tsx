import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  getCurrentUser,
  loginWithEmailAndPassword,
  logoutUserWithToken,
  requestAccessTokenWithRefreshToken,
} from "./SessionsController";
import { RootState } from "./../app/store";

export interface User {
  id?: string;
  email?: string;
  createdAt?: string;
}

export interface UserLoginData {
  full_name: string;
  email: string;
  password: string;
}
interface AuthState {
  currentUser?: User;
  loading: boolean;
  error: boolean;
  errorMessages?: string[];
  accessToken?: string;
  refreshToken?: string | null;
  expiresIn?: number;
  tokenType?: string;
}

const initialState: AuthState = {
  currentUser: {
    id: undefined,
    email: undefined,
    createdAt: undefined,
  },
  loading: true,
  error: false,
  errorMessages: [],
  accessToken: undefined,
  refreshToken: getRefreshToken(),
  expiresIn: undefined,
  tokenType: undefined,
};

export const signUpUser = createAsyncThunk(
  "session/signUpUser",
  async (payload: UserLoginData, { rejectWithValue }) => {
    const response = await createUserWithEmailAndPassword(
      payload.full_name,
      payload.email,
      payload.password
    );
    if (response.errors) {
      return rejectWithValue(response);
    }
    return response;
  }
);

export const loginUser = createAsyncThunk(
  "session/loginUser",
  async (payload: UserLoginData, { rejectWithValue }) => {
    const loginResponse = await loginWithEmailAndPassword(
      payload.email,
      payload.password
    );
    // if response has errors rejectwithvalue
    console.log(loginResponse);
    if (loginResponse.error) {
      return rejectWithValue(loginResponse);
    }
    const userResponse = await getCurrentUser(loginResponse.access_token);
    if (userResponse.error) {
      return rejectWithValue(userResponse.data);
    }
    const response = {
      ...loginResponse,
      ...userResponse,
    };
    return response;
  }
);

export const logoutUser = createAsyncThunk(
  "session/logoutUser",
  async (payload: string, { rejectWithValue }) => {
    const response = await logoutUserWithToken(payload);
    // if response has errors rejectwithvalue
    console.log(response);
    if (response.error) {
      return rejectWithValue(response);
    }
    return response;
  }
);

export const refreshAccessToken = createAsyncThunk(
  "session/refreshAccessToken",
  async (refreshToken: string | undefined | null, { rejectWithValue }) => {
    if (!refreshToken) {
      return rejectWithValue("No refresh token");
    }
    const refreshResponse = await requestAccessTokenWithRefreshToken(
      refreshToken
    );
    if (refreshResponse.error) {
      return rejectWithValue(refreshResponse.data);
    }
    const userResponse = await getCurrentUser(refreshResponse.access_token);
    if (userResponse.error) {
      return rejectWithValue(userResponse.data);
    }
    const response = {
      ...refreshResponse,
      ...userResponse,
    };

    return response;
  }
);

export const currentUser = createAsyncThunk(
  "Session/currentUser",
  async (accessToken: string | undefined | null, { rejectWithValue }) => {
    if (!accessToken) {
      return rejectWithValue("No access token");
    }
    const response = await getCurrentUser(accessToken);
    if (response.error) {
      return rejectWithValue(response.data);
    }
    return response;
  }
);

export const sessionReducer = createSlice({
  name: "session",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    resetErrorState: (state) => {
      state.error = false;
      state.errorMessages = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(signUpUser.fulfilled, (state, action: any) => {
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        state.expiresIn = action.payload.expires_in;
        state.tokenType = action.payload.token_type;
        state.currentUser = {
          id: action.payload.id,
          email: action.payload.email,
          createdAt: action.payload.created_at,
        };

        storeRefreshToken(action.payload.refresh_token);

        state.loading = false;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(signUpUser.rejected, (state, action: any) => {
        state.loading = false;
        state.error = true;
        state.errorMessages = action.payload.errors;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(loginUser.fulfilled, (state, action: any) => {
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        state.expiresIn = action.payload.expires_in;
        state.currentUser = {
          id: action.payload.id,
          email: action.payload.email,
          createdAt: action.payload.created_at,
        };

        storeRefreshToken(action.payload.refresh_token);

        state.loading = false;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(loginUser.rejected, (state, action: any) => {
        state.loading = false;
        state.error = true;
        state.errorMessages = [
          "Invalid credentials. Did you enter them correctly?",
        ];
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(logoutUser.fulfilled, (state, action: any) => {
        state.currentUser = {
          id: undefined,
          email: undefined,
          createdAt: undefined,
        };
        state.accessToken = undefined;
        state.refreshToken = undefined;
        state.expiresIn = undefined;
        state.tokenType = undefined;
        removeRefreshToken();

        state.loading = false;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(logoutUser.rejected, (state, action: any) => {
        state.loading = false;
        state.error = true;
        state.errorMessages = [action.payload.error];
      })
      .addCase(refreshAccessToken.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(refreshAccessToken.fulfilled, (state, action: any) => {
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        state.expiresIn = action.payload.expires_in;
        state.currentUser = {
          id: action.payload.id,
          email: action.payload.email,
          createdAt: action.payload.created_at,
        };
        storeRefreshToken(action.payload.refresh_token);

        state.loading = false;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(refreshAccessToken.rejected, (state, action: any) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(currentUser.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(currentUser.fulfilled, (state, action: any) => {
        state.currentUser = {
          id: action.payload.id,
          email: action.payload.email,
          createdAt: action.payload.created_at,
        };
        state.loading = false;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(currentUser.rejected, (state, action: any) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { setLoading, resetErrorState } = sessionReducer.actions;

export const selectLoading = (state: RootState) => state.session?.loading;

export const selectErrorMessage = (state: RootState) => state.session?.error;

export const selectCurrentUser = (state: RootState) =>
  state.session?.currentUser;

export default sessionReducer.reducer;

function storeRefreshToken(token: string) {
  localStorage.setItem("refreshToken", token);
}

function removeRefreshToken() {
  localStorage.removeItem("refreshToken");
}

function getRefreshToken() {
  return localStorage.getItem("refreshToken");
}
