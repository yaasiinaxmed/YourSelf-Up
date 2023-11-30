import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authSlice } from "./api/AuthSlice";
import { userSlice } from "./api/UserSlice";
import { challengeSlice } from "./api/ChallengeSlice";

export const store = configureStore({
  reducer: {
    [authSlice.reducerPath]: authSlice.reducer,
    [userSlice.reducerPath]: userSlice.reducer,
    [challengeSlice.reducerPath]: challengeSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authSlice.middleware)
      .concat(userSlice.middleware)
      .concat(challengeSlice.middleware),
});

setupListeners(store.dispatch);
