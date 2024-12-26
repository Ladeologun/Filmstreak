import { Client } from "~apiclient";
import { NOW_PLAYING_URL, POPULAR_MOVIES_URL } from "./constants";
import { convertTMDBMovieToMovie } from "./utils";
import { Movie } from "./types";

export type DataType = {
    nowPlayingMovies: Movie[];
    popularMovies:Movie[]
}


export const fetchPopularMovies = async():Promise<Movie[]> => {
    const options = {
        path: POPULAR_MOVIES_URL()
    };
    const response = await Client.get(options);
    let movies = convertTMDBMovieToMovie(response?.results);
    return movies;
};

export const fetchNowPlayingMovies = async():Promise<Movie[]> => {
    const options = {
        path: NOW_PLAYING_URL()
    };
    const response = await Client.get(options);
    let movies = convertTMDBMovieToMovie(response?.results);
    return movies;
};

export const syncMoviesFromTMDB = async (onResultFetched:Function) => {

        const results = await Promise.allSettled([
            fetchNowPlayingMovies(),
            fetchPopularMovies()
        ]);

        const data:DataType = {
            nowPlayingMovies:[],
            popularMovies:[]
        }
        const errors: string[] = [];

        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                if (index === 0) { data["nowPlayingMovies"] = result.value};
                if (index === 1) { data["popularMovies"] = result.value};
            } else {
                errors[index] = result.reason?.message || "Failed to fetch";
            }
        });

        onResultFetched(data, errors)

}
