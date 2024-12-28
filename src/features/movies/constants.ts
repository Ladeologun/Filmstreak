
export const NOW_PLAYING_URL = ()=>`/movie/now_playing`;
export const POPULAR_MOVIES_URL = ()=>`/movie/popular`;
export const UPCOMING_MOVIES_URL = ()=>`/movie/upcoming`;
export const ADD_TO_WISHLIST_URL = (account_id:number)=> `/account/${account_id}/watchlist`;
export const ACCOUNT_STATE_URL = (movie_id:number)=>`/movie/${movie_id}/account_states`;
export const WATCHLIST_MOVIES_URL = (account_id:number)=>`/account/${account_id}/watchlist/movies`


export const STAR_LOGO = require("../../assets/drawables/star.png");
export const HEART = require("../../assets/drawables/heart.png");
export const LOVE = require("../../assets/drawables/love.png");
export const LEFT_ARROW = require("../../assets/drawables/left-arrow.png");
export const UPLOAD = require("../../assets/drawables/wish-list.png");
export const ADD_ICON = require("../../assets/drawables/add-icon.png");
export const EMPTY_WISHLIST_ICON = require("../../assets/drawables/empty-wishlist.png");
export const DELETE_ICON = require("../../assets/drawables/delete.png");

export const MOVIE_PAGINATION_LIMIT = 15;