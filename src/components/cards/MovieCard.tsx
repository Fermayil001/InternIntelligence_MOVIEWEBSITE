import { Base_Url_Img } from "../../config/apiHelper"
import { Movie } from "../../types/types"

interface MovieCardProps {
  movie: Movie; 
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="w-1/5 border rounded-lg">
      <img className="rounded-lg" src={`${Base_Url_Img}${movie.backdrop_path}`} alt={movie.title} />
    </div>
  )
}

export default MovieCard