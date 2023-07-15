/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Middleware } from "@reduxjs/toolkit";

const logger: Middleware = (store) => (next) => (action) => {
  console.log(action);
  if (action.type === "counter/increment") {
    action.type = "counter/baramoByAmunt";
    action.payload = 10;
  }
  next(action);
};

export default logger;
