import { useEffect, useState } from "react";
import MovieCard from "../../components/cards/MovieCard"
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { useGetAllMoviesQuery, useGetMoviesByCategoryQuery } from "../../services/moviesApi"
import { setMovies } from "../../redux/slices/categorySlice";
import { useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Home = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const [filterMovies, setFilterMovies] = useState<string>('')

  const dispatch = useAppDispatch();

  const { movies } = useAppSelector((state) => state.category);
  const { data } = useGetMoviesByCategoryQuery({ genreId: id });
  const { data: alldData } = useGetAllMoviesQuery()

  useEffect(() => {
    location.pathname === '/'
      ? dispatch(setMovies(alldData?.results))
      : dispatch(setMovies(data?.results))
  }, [data, dispatch]);

  const filteredMovies = movies?.filter(movie => movie.title.toLowerCase().includes(filterMovies.toLowerCase()))


  return (
    <section className="bg-gray-900 min-h-screen px-10 py-5">
      <div className="flex justify-center relative w-[30%] mx-auto">
        <input
          placeholder="Search movies..."
          value={filterMovies}
          onChange={(e) => setFilterMovies(e.target.value)}
          type="text"
          className="border-none placeholder:text-lg outline-none w-full py-1 text-xl px-3 bg-amber-100 rounded-lg"
        />
        <CiSearch className="absolute right-0 top-0 mt-2 cursor-pointer mr-2 text-xl" />
      </div>
      <div className="flex flex-wrap w-full gap-x-5 gap-y-7 pt-10">
        {filteredMovies?.length === 0
          ? <div className="text-red-500 h-screen">No movies found for this category.</div>
          : filteredMovies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </section>
  )
}

export default Home