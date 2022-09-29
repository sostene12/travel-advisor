import { configureStore } from "@reduxjs/toolkit";
import childReducer from "./childRedux";

const store = configureStore({
  reducer: {
    child: childReducer,
  },
});

export default store;
