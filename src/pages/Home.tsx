import MovieCard from "../components/cards/MovieCard"
import { useGetAllMoviesQuery } from "../services/movies"

const Home = () => {

  const { data } = useGetAllMoviesQuery()


  return (
    <section className="bg-gray-900 px-10 py-5">
      <div className="flex justify-center">
        <input type="text" className="border bg-amber-100" />
      </div>
      <div className="flex flex-wrap w-full gap-x-6 gap-y-3 pt-10">
        {data && data.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  )
}

export default Home