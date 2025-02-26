import React, { useState, useEffect } from 'react';
import { FavoriteBtnProps } from '../../types/types';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { addFav, removeFav } from '../../redux/slices/favCount';
import CircularProgress from '@mui/material/CircularProgress';



const AddFavBtn: React.FC<FavoriteBtnProps> = ({ id, title, backdrop_path, genres, overview, release_date, vote_average }) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useAppDispatch()

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setIsFavorite(favorites.some((movie: { id: number }) => movie.id === id));
    }, [id]);

    const handleToggleFavorite = async () => {
        setLoading(true)
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (isFavorite) {
            const updatedFavorites = favorites.filter((movie: { id: number }) => movie.id !== id);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            setTimeout(() => {
                dispatch(removeFav())
                setLoading(false);
            }, 1000);
        } else {
            const updatedFavorites = [...favorites, {
                id,
                title,
                backdrop_path,
                overview,
                release_date,
                vote_average,
                genres: genres.map((genre: { id: number; name: string }) => genre.name),
            }];
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            setTimeout(() => {
                dispatch(addFav())
                setLoading(false);
            }, 1000);
        }
        setIsFavorite(!isFavorite);
    };

    return (
        <button
            onClick={handleToggleFavorite}
            className={`px-6 py-3 w-2xs mt-3 cursor-pointer rounded-full text-white ${isFavorite ? 'bg-red-500' : 'bg-gray-600'} hover:bg-opacity-80 transition-colors duration-300`}
        >
            {loading
                ? <CircularProgress size={20} color='inherit' />
                : `${isFavorite ? 'Remove favorite' : 'Add favorite'}`
            }


        </button>
    );
};

export default AddFavBtn;
