import { configureStore } from "@reduxjs/toolkit";

import movieReducer from "./movieSlice"
import addToFavReducer from "./AddToFavSlice"

export const store = configureStore({
  reducer: {
      movie: movieReducer,
      fav: addToFavReducer
  },
 
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;