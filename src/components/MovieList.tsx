import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { fetchMovieData } from "../redux/movieSlice";
import { Movie } from "./Movie";
import "../App.css";
const MovieList = () => {
  const movieArr = useAppSelector((state) => {
    return {
      loading: state.movie.loading,
      movies: state.movie.movies,
    };
  });

  const dispatch = useAppDispatch();

  

  useEffect(() => {
    dispatch(fetchMovieData());
  }, []);



  return (
    <div>
        
      {movieArr.loading ? (
          <div className="container">
              <h2>Loading...</h2>
          </div>
       
      ) : (
        <div className="container">
          {movieArr.movies.map((movie) => {
            const { id, title, overview, vote_average, poster_path } = movie;
         
              return <Movie key={id} id={id} title={title} overview={overview} vote_average={vote_average} poster_path={poster_path}  />
          
          })}
        </div>
      )}
    </div>
  );
};
export default MovieList;
