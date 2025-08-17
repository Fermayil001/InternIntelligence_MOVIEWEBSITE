import { Base_Url_Img } from "../../config/apiHelper"
import { Movie } from "../../types/types"
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import noImg from '../../assets/images/No_Image_Available.jpg'


interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {


  return (
    <Link to={`/movie/details/${movie.title}/${movie.id}`}>
      <div className="rounded-lg group w-full min-w-[160px] max-w-xs mx-auto transition-transform duration-500 hover:scale-105 bg-gray-800 shadow-md">
        <div className="relative">
          <img
            className="rounded-lg w-full h-auto cursor-pointer aspect-[7/10] object-cover transition-transform duration-500 group-hover:scale-100 group-hover:object-center"
            loading="lazy"
            src={movie.backdrop_path
              ? `${Base_Url_Img}${movie.backdrop_path}`
              : noImg
            }
            alt={movie.title}
          />
          <div className="flex transition-transform duration-500 group-hover:scale-105 items-baseline px-2 w-full justify-between gap-1 font-bold absolute text-amber-400 right-0 bottom-0 pr-2">
            <span>
              <h3 className="text-amber-50 font-bold text-[12px] z-10 mb-3 line-clamp-2">{movie.title}</h3>
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