import { ImageSourcePropType } from "react-native";


export type MovieDetailDisplayType = {
    id: number
    title: string;
    overview: string;
    poster: ImageSourcePropType

}

export const carouselDummyData = [
    {
        id:1,
        title: "Death Machine",
        overview: "Postprocedural hemorrhage of the spleen following a procedure",
        poster:require("../assets/drawables/img_1.jpg"),
       
    },
    {
        id:2,
        title: "Beware of Pity",
        overview: "Poisoning by local astringents and local detergents, assault, subsequent encounter",
        poster:require("../assets/drawables/img_2.jpg"),
    },
    {
        id:3,
        title:"Gretchen the Greenhorn",
        poster:require("../assets/drawables/img_3.jpg"),
        overview:"Occupant (driver) (passenger) of pick-up truck or van injured in transport accident with military vehicle, subsequent encounter"
    },
    {
        id:4,
        title:"Rio Grande",
        poster:require("../assets/drawables/img_4.jpg"),
        overview:"Unspecified injury of other blood vessels of thorax, right side, initial encounter"
    }
]