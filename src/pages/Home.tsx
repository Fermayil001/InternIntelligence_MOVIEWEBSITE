import { useEffect } from "react";
import MovieCard from "../components/cards/MovieCard"
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { useGetAllMoviesQuery, useGetMoviesByCategoryQuery } from "../services/moviesApi"
import { setMovies } from "../redux/slices/categorySlice";

const Home = () => {

  const dispatch = useAppDispatch();
  const { categoryId, movies } = useAppSelector((state) => state.category);

  const { data } = useGetMoviesByCategoryQuery({ genreId: categoryId });
  const { data: alldData } = useGetAllMoviesQuery()

  useEffect(() => {
    categoryId
      ? dispatch(setMovies(data.results))
      : dispatch(setMovies(alldData?.results ?? []))
  }, [data, dispatch]);
  return (
    <section className="bg-gray-900 px-10 py-5">
      <div className="flex justify-center">
        <input type="text" className="border bg-amber-100" />
      </div>
      <div className="flex flex-wrap w-full gap-x-5 gap-y-7 pt-10">
        {movies && movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  )
}

export default Home