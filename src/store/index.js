import { configureStore } from "@reduxjs/toolkit";
import providerReducer from "./features/provider";
import authReducer from "./features/member";

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    provider: providerReducer,
    auth: authReducer,
  },
});

export default store;
