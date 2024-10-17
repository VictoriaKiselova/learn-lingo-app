import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import favoritesReducer from "./favorites/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfigAuth = {
  key: "auth",
  storage,
  whitelist: ["isAuthorized"],
};

const persistConfigFavorites = {
  key: "favorites",
  storage,
  whitelist: ["favoritesItems"],
};

const pAuthReducer = persistReducer(persistConfigAuth, authReducer);
const pFavoritesReducer = persistReducer(
  persistConfigFavorites,
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    auth: pAuthReducer,
    favorites: pFavoritesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
