import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
// import logger from "redux-logger";
import logger from "../middlewares/logger";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  middleware: (getDefautlMiddleware) => getDefautlMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
