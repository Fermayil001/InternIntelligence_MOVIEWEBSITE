import { Base_Url_Img } from "../../config/apiHelper"
import { Movie } from "../../types/types"
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {


  return (
    <Link to={`/movie/details/${movie.title}/${movie.id}`}>
      <div style={{ width: 'calc((100vw  + (4 * 20px)) / 6)' }} className=" rounded-lg group">
        <div className="relative">
          <img
            className="rounded-lg w-[100%] h-[100%] cursor-pointer aspect-[7/10] transition-transform duration-500 group-hover:scale-105 group-hover:object-fill group-hover:object-center"
            src={`${Base_Url_Img}${movie.backdrop_path}`} alt={movie.title}
          />
          <div className="flex transition-transform duration-500 group-hover:scale-105 items-baseline px-2 w-full justify-between gap-1 font-bold absolute text-amber-400 right-0 bottom-0 pr-2">
            <span>
              <h3 className="text-amber-50 font-bold text-[12px] z-10 mb-3">{movie.title}</h3>
            </span>
            <span className="flex items-center gap-1">
              {movie.vote_average.toFixed(1)}
              <FaStar />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard