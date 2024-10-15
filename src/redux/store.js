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
import getTeachersList from "./teachers/slice";
import storage from "redux-persist/lib/storage";

const persistConfigAuth = {
  key: "auth",
  storage,
  whitelist: ["name", "isAuthorized"],
};

const persistConfigTeachers = {
  key: "teachers",
  storage,
};

const pUserReducer = persistReducer(persistConfigAuth, changeUser);
const pTeachersReducer = persistReducer(persistConfigTeachers, getTeachersList);

export const store = configureStore({
  reducer: {
    auth: pUserReducer,
    teachers: pTeachersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
