import { configureStore } from "@reduxjs/toolkit";
import netflixReducer from "./index";

const store = configureStore({
  reducer: {
    netflix: netflixReducer,
  },
});

export default store;
