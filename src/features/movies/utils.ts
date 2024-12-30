import ENV_VARIABLES from '../../../config';
import {Movie, TMDBMovie} from './types';

export const convertTMDBMovieToMovie = (movie: TMDBMovie[]): Movie[] => {
   const modifieddata = movie.map((mv: TMDBMovie) => ({
      id: mv['id'],
      backPoster: ENV_VARIABLES.TMDB_POSTER_BASE_URL + mv['backdrop_path'],
      popularity: Math.round(mv['popularity']),
      title: mv['title'],
      poster: ENV_VARIABLES.TMDB_POSTER_BASE_URL + mv['poster_path'],
      overview: mv['overview'],
      rating: parseFloat(mv['vote_average'].toFixed(1)),
      language: mv['original_language'],
      video: mv['video'],
      date: mv['release_date'],
   }));

   return modifieddata;
};

export const getYear = (dateString: string) => {
   const date = new Date(dateString);
   return date.getFullYear();
};
