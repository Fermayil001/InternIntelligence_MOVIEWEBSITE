export interface Genres {
    id: number;
    name: string;
}

export interface CategoriesResponse {
    genres: Genres[];
}

export interface Movie {
    backdrop_path: string;
    id: number;
    overview: string;
    release_date: string;
    title: string;
    vote_average: number;
}

export interface MoviesResponse {
    page: number;
    results: Movie[];
}

export interface MovieDetails {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    genres: { id: number; name: string }[];
    budget: number;
    revenue: number;
    runtime: number;
    poster_path: string;
    backdrop_path: string;
    production_companies: { name: string; logo_path: string | null }[];
    vote_average: number;
    vote_count: number;
}

export interface FavoriteBtnProps {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    genres: { id: number; name: string }[];
    backdrop_path: string;
    vote_average: number;
}