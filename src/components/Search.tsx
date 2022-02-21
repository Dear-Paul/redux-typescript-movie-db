import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { searchMovieData } from "../redux/movieSlice";

// type SearchProps = {};

export const Search = () => {
  const [query, setQuery] = useState("");

  const dispatch = useAppDispatch();

  const onSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.currentTarget.value);
  };

  useEffect(() => {
    dispatch(searchMovieData(query));
   
  }, [query, dispatch]);
  return (
    <>
      <input
        className="input"
        type="search"
        placeholder="Movie title"
        onChange={onSearchChange}
      />
    </>
  );
};
