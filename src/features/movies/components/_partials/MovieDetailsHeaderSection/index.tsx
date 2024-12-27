import { Image, ImageBackground, Text, View } from "react-native";
import styles from "./styles";
import DetailsHeader from "../DetailsHeader";
import MovieDetailsCTA from "../MovieDetailsCTA/Index";

interface Iprops {
    poster: string;
    title: string;
    addedToWishlist: boolean
}


const MovieDetailsHeaderSection:React.FC<Iprops> = ({poster, title, addedToWishlist}) => {

    return(
        <ImageBackground source={{uri:poster}}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={{flex:1}}>
                <DetailsHeader />

                <View style={{flex:1,justifyContent:"flex-end"}}>
                    
                    <View
                        style={
                            {width:"100%",height:200,alignItems:"center",justifyContent:"flex-end", backgroundColor:"rgba(15, 17, 29, 0.2)"}
                        }
                    >
                        <MovieDetailsCTA addedToWishlist={addedToWishlist} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default MovieDetailsHeaderSection;