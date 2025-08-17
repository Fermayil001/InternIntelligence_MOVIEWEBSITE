import { useParams } from "react-router-dom";
import { Base_Url_Img } from "../../config/apiHelper";
import { useGetMovieDetailsQuery } from "../../services/moviesApi";
import { FaStar } from "react-icons/fa";
import DetailSkelaton from "../../components/ui/DetailSkelaton";
import AddFavBtn from "../../components/buttons/AddFavBtn";
import noImg from '../../assets/images/No_Image_Available.jpg'

const Details = () => {

    const param = useParams()
    if (!param.id) return
    const { data: movie, isLoading } = useGetMovieDetailsQuery({ movieId: param.id })

    return (
        isLoading
            ? <DetailSkelaton />
            : <div className="bg-gray-800 w-full min-h-screen pt-6 px-2 sm:px-4">
                <div className="relative w-full max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                        <div className="w-full md:w-1/3 flex-shrink-0 mb-4 md:mb-0">
                            <img
                                className="w-full aspect-[8/10] object-cover rounded-lg shadow-md"
                                src={movie?.backdrop_path
                                    ? `${Base_Url_Img}${movie.backdrop_path}`
                                    : noImg
                                }
                                alt={movie?.title || ''}
                            />
                        </div>
                        <div className="flex flex-col w-full md:w-2/3 gap-2 text-white">
                            <h2 className="font-bold text-xl sm:text-2xl mb-2">{movie?.title}</h2>
                            <p className="text-base sm:text-lg md:text-2xl leading-6 sm:leading-8 py-2 sm:py-3">{movie?.overview}</p>
                            <div className="text-sm flex items-center gap-1 font-bold">
                                <span className="text-amber-400"><FaStar /></span>
                                <span>{movie?.vote_average.toFixed(1)} / 10</span>
                            </div>
                            <span className="text-sm font-bold">Year: {movie?.release_date.split('-')[0]}</span>
                            <div className="font-bold flex flex-wrap gap-1">
                                <span>Genres: </span>
                                {movie?.genres.map((genre, index) => {
                                    return <span key={genre.id}>{genre.name}{index === movie.genres.length - 1 ? '.' : ','} </span>
                                })}
                            </div>
                            <div className="mt-3 mx-auto sm:mx-0">
                                <AddFavBtn
                                    id={Number(param.id)}
                                    title={movie?.title ?? ''}
                                    backdrop_path={movie?.backdrop_path ?? ''}
                                    genres={movie?.genres ?? []}
                                    overview={movie?.overview ?? ''}
                                    release_date={movie?.release_date ?? ''}
                                    vote_average={movie?.vote_average ?? 0}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Details