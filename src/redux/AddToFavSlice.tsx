import { createSlice } from "@reduxjs/toolkit";

type FavouritesProps = {
  isHover: boolean;
  id: number
};

let initialState: FavouritesProps = {
  isHover: false,
  id:1
};

const addToFavSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    onMouseEnter: (state, {payload}) => {
    //   payload.filter((x:any) => x === x.id)  
      state.isHover = true;
    },
    onMouseLeave: (state, {payload}) => {
      state.isHover = false;
    },
  },
});

export const { onMouseEnter, onMouseLeave } = addToFavSlice.actions;
export default addToFavSlice.reducer;
