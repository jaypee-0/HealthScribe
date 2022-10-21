import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import sessionReducer from "../services/Reducers";

const store = configureStore({
  reducer: {
    session: sessionReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;