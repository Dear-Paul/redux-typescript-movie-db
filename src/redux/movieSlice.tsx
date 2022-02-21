import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

export const fetchMovieData = createAsyncThunk(
  "movies/fetchMovieData",
  async (): Promise<any> => {
    const {
      data: { results },
    }: any | AxiosResponse = await axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
      )

      .catch((err) => {
        console.log(err);
      });
    
    return results;
  }
);

export const searchMovieData = createAsyncThunk(
  "movies/filterMovieData",
  async (text: string): Promise<any> => {
    const {
      data: { results },
    }: any | AxiosResponse = await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${text}`
   
      )

      .catch((err) => {
        console.log(err);
      });
 
    return results;
  }
);

type MovieState = {
  id: number;
  overview: string;
  title: string;
  poster_path: string;
  vote_average: number;
  isHovered: boolean;
};

type MovieStateProps = {
  loading: boolean;
  movies: MovieState[];
  favMovies: MovieState[];
  isHovered: boolean | any;
};

let initialState: MovieStateProps = {
  loading: true,
  isHovered: false,
  movies: [],
  favMovies: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addToFav: (state, { payload }) => {
      let index = state.favMovies.findIndex(
        (movie) => movie.id === payload.id
      );
      if (!state.favMovies[index]) {
        state.favMovies.push(payload);
        console.log("movie added")
      } else {
        state.favMovies = state.favMovies.filter((movie, i) => {
          return i !== index;
        });
        console.log("Movie removed from favourites!");
      }
    },
    
  },
  extraReducers: function (builder) {
    builder.addCase(fetchMovieData.fulfilled, (state, { payload }) => {
      state.movies = payload;
      state.loading = false;
    });
    builder.addCase(searchMovieData.fulfilled, (state, { payload }) => {
      state.movies = payload;
      state.loading = false;
    });
  },
});

export const { addToFav } = moviesSlice.actions;
export default moviesSlice.reducer;
