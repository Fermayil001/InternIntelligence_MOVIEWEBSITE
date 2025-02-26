import { useParams } from "react-router-dom";
import { Base_Url_Img } from "../../config/apiHelper";
import { useGetMovieDetailsQuery } from "../../services/moviesApi";
import { FaStar } from "react-icons/fa";
import DetailSkelaton from "../../components/ui/DetailSkelaton";
import AddFavBtn from "../../components/buttons/AddFavBtn";



const Details = () => {

    const param = useParams()
    if (!param.id) return
    const { data: movie, isLoading } = useGetMovieDetailsQuery({ movieId: param.id })

    return (
        isLoading
            ? <DetailSkelaton />
            : <div className=" bg-gray-800 w-full min-h-screen pt-10">
                <div className="relative w-[80%] bg--500 mx-auto">
                    <div className="flex gap-x-10">
                        <div className="w-1/3">
                            <img
                                className="w-full aspect-[8/10] bg-cover"
                                src={`${Base_Url_Img}${movie?.backdrop_path}`}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col w-full gap-2 text-white">
                            <h2 className="font-bold">{movie?.title}</h2>
                            <p className="text-2xl leading-8 py-3">{movie?.overview}</p>
                            <div className="text-sm flex items-center gap-1 font-bold">
                                <span className="text-amber-400"><FaStar /></span>
                                <span>{movie?.vote_average.toFixed(1)} / 10</span>
                            </div>
                            <span className="text-sm font-bold">Year: {movie?.release_date.split('-')[0]}</span>
                            <div className="font-bold">
                                <span>Genres: </span>
                                {movie?.genres.map((genre, index) => {
                                    return <span key={genre.id}>{genre.name}{index === movie.genres.length - 1 ? '.' : ','} </span>
                                })}
                            </div>
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
    )
}

export default Details