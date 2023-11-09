import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Redux/LoginSlice";
import contentReducer from "./Redux/ContentSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    content: contentReducer,
  },
});
export default store;
