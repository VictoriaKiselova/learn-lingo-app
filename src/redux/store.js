import { configureStore } from "@reduxjs/toolkit";
import changeUser from "./auth/slice";
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

const persistConfigContacts = {
  key: "auth",
  storage,
  whitelist: ["name", "isAuthorized"],
};

const pUserReducer = persistReducer(persistConfigContacts, changeUser);

export const store = configureStore({
  reducer: {
    auth: pUserReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
