import { ImageSourcePropType } from "react-native"

export interface Movie {
    id?:number
    backPoster?: string
    popularity?:number
    title?:string
    poster?: ImageSourcePropType
    overview?: string
    rating?:number
    language?:string
    video?:boolean
}