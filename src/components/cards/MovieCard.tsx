import { Base_Url_Img } from "../../config/apiHelper"
import { Movie } from "../../types/types"
import { FaStar } from "react-icons/fa";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div style={{ width: 'calc((100vw  + (4 * 20px)) / 6)' }} className="border rounded-lg group">
      <div className="relative">
        <img className="rounded-lg w-[100%] h-[100%] object- cursor-pointer aspect-[7/10] transition-transform duration-500 group-hover:scale-105 group-hover:object-fill group-hover:object-center" src={`${Base_Url_Img}${movie.backdrop_path}`} alt={movie.title} />
        <span className="flex items-center gap-1 z-0 font-bold absolute text-amber-400 right-0 bottom-0 pr-2 pb-4">
          {movie.vote_average.toFixed(1)}
          <FaStar />
        </span>
        <div className="w-full px-2 py-8 cursor-default max-h-0 overflow-hidden absolute gap-2 bottom-0 transition-all duration-700 group-hover:max-h-[250px] group-hover:scale-105 group-hover:backdrop-blur-lg group-hover:shadow-rose-700:">
          <h3 className="text-amber-50 font-bold text-[12px] z-10 mb-3">{movie.title}</h3>
          <p className="text-white text-xs my-4">{movie.overview}</p>
          <span className="text-gray-400 text-xs">{movie.release_date.split('-')[0]}</span>
        </div>

      </div>
      <div className="text-white">

      </div>
    </div>
  )
}

export default MovieCard