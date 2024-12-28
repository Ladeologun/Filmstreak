import { Client } from "~apiclient";
import { ACCOUNT_STATE_URL, ADD_TO_WISHLIST_URL, NOW_PLAYING_URL, POPULAR_MOVIES_URL } from "./constants";
import { convertTMDBMovieToMovie } from "./utils";
import { Movie } from "./types";
import ENV_VARIABLES from "../../../config";

export type DataType = {
    nowPlayingMovies: Movie[];
    popularMovies:Movie[]
}

export type MovieStatusType = {
    favorite: boolean;
    id:number;
    rated:boolean;
    watchlist:boolean
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


export const toggleWishlist = async(id:number, status:boolean, callback:Function)=> {
    const options = {
        path: ADD_TO_WISHLIST_URL(ENV_VARIABLES.TMDB_ACCOUNT_ID),
        body: {
            media_type: 'movie', 
            media_id: id, 
            watchlist: status
        } 
    };
    try{
        const response = await Client.post(options);
        callback?.("success",response,null)
    }catch(error){
        callback?.("error", null, error)
    }
    
};

export const checkMovieAccountState = async(id:number, callback:Function)=> {
    const options = {
        path: ACCOUNT_STATE_URL(id),
        queryParams:{
            session_id: ENV_VARIABLES.TMDB_ACCOUNT_SESSION_ID
        }
    };
    try{
        const response:MovieStatusType = await Client.get(options);
        callback("success", response, null);
    }catch(error){
        callback?.("error", null, error)
    }
    
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
