import React, { useEffect, useState } from 'react';
import MovieCard from '../../components/cards/MovieCard';
import { FavoriteBtnProps } from '../../types/types';

const Favorites: React.FC = () => {
    const [favorites, setFavorites] = useState<FavoriteBtnProps[]>([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorites(storedFavorites);
    }, []);

    return (
        <div className="bg-gray-900 min-h-screen px-10 py-5">
            <h2 className="text-2xl text-white font-bold">Favorites</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full gap-x-4 gap-y-7 pt-10 justify-center">
                {favorites.map((fav) => (
                    <MovieCard key={fav.id} movie={fav} />
                ))}
            </div>
        </div>
    );
};

export default Favorites;

