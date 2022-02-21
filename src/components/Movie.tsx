import React, { useState } from "react";

import { useAppDispatch } from "../redux/hooks";
import { addToFav } from "../redux/movieSlice";
import { HiHeart } from "react-icons/hi";

import "../App.css";

type MovieProps = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
};

export const Movie = ({
  id,
  title,
  overview,
  vote_average,
  poster_path,
}: MovieProps) => {
  const dispatch = useAppDispatch();

  const [movieOverview, setMovieOverview] = useState(false);
  const [iconClicked, setIconClicked] = useState("heart");
  const [movieId, setMovieId] = useState<{}>({
    id,
    title,
    overview,
    poster_path,
    vote_average,
  });

  const handleOnAddFav = (
    e: React.FormEvent<HTMLButtonElement | SVGElement>
  ) => {
    setMovieId(e.eventPhase);
    dispatch(addToFav(movieId));

    return iconClicked === "heart"
      ? setIconClicked("active")
      : setIconClicked("heart");
  };

  return (
    <div
      className="card"
      onMouseEnter={() => setMovieOverview(true)}
      onMouseLeave={() => setMovieOverview(false)}
    >
      <h4>{title}</h4>

      {movieOverview && (
        <HiHeart className={iconClicked} onClick={(id) => handleOnAddFav(id)} />
      )}

      <img
        className="image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
        alt={title}
        style={{ width: "70%", height: "80%" }}
      />
      {movieOverview && (
        <div className="overview">
          <h4>{overview}</h4>
        </div>
      )}
      <h4>Rating: {vote_average}</h4>
    </div>
  );
};
