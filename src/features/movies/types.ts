import { ImageSourcePropType } from "react-native"

export interface Movie {
    id:number
    backPoster?: string
    popularity:number
    title:string
    poster: string
    overview?: string
    rating:number
    language:string
    video?:boolean
    date:string
}


export interface TMDBMovie {
    id:number
    backdrop_path?: string
    popularity:number
    title:string
    poster_path?: string
    overview?: string
    vote_average:number
    original_language:string
    video?:boolean
    release_date: string
}

export interface NavigationTypes {
    navigate: (name: string, params?: { [key: string]: any }) => void;
    replace?: (name: string, params?: { [key: string]: any }) => void;
    canGoBack?: () => boolean;
    goBack: () => void;
}
