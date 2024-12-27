import { ActivityIndicator, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { LOVE, STAR_LOGO } from "~movies/constants";
import { COLORS } from "~styles";

interface Iprops {
    language: string;
    popularity: number;
    rating: number
}


const MovieVotesAndPopularity:React.FC<Iprops> = ({language,popularity,rating}) => {

    return(
        <>
        <View style={styles.votesandpopularity}>
            <View style={[styles.categorycontainer,{marginLeft:0}]}>
                <Text style={styles.categorttext}>{language}</Text>
            </View>
            <View style={[styles.categorycontainer,{paddingHorizontal:24}]}>
                <Text style={styles.categorttext}>{popularity}</Text>
            </View>
            <View style={[styles.categorycontainer,{paddingHorizontal:24}]}>
                <Image source={STAR_LOGO} resizeMode="contain" style={{width:15,height:15,marginRight:5}}/>
                <Text style={styles.categorttext}>{rating}</Text>
            </View>
        </View>
        <TouchableOpacity 
            style={{}} 
            onPress={()=>{
                console.log("pressed")
            }}
        >
            <View style={styles.wishlistBtn}>
                {/* <Image source={LOVE} style={{width:20,height:20,tintColor:"#fff",marginRight:10}}/> */}
                <ActivityIndicator size={"small"} color={COLORS.WHITE} style={{marginRight:10}}/>
                <Text style={styles.wishListTextStyle}>Add to wishlist</Text>
            </View>
        </TouchableOpacity>

        </>
    )
}

export default MovieVotesAndPopularity;