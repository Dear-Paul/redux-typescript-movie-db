import { useAppSelector } from "../redux/hooks";
import "../App.css";
import { Movie } from "./Movie";
import { Fragment, useEffect } from "react";
export const FavouriteMovies = () => {
  const favMovies = useAppSelector((state) => state.movie.favMovies);
  const { isHovered } = useAppSelector((state) => state.movie);

 

  useEffect(() => {
    console.log(isHovered);
  }, [isHovered]);
  const renderFavs = favMovies.map((movie) => {
  
    const { id, title, overview, poster_path, vote_average } = movie;
    return (
      <Fragment key={id}>
        <Movie
          id={id}
          title={title}
          overview={overview}
          poster_path={poster_path}
          vote_average={vote_average}
        />
      </Fragment>
    );
  });
  return (
    <div>
      {favMovies.length > 0 ? (
        <div className="container">{renderFavs}</div>
      ) : (
        <div className="container">
          {" "}
          <h4> Hey there! No Favs yet..</h4>
        </div>
      )}

     
    </div>
  );
};
