import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface Iprops {
    language: string;
    popularity: string;
    rating: string
}


const MovieVotesAndPopularity:React.FC<Iprops> = ({language,popularity,rating}) => {

    return(
        <View style={styles.votesandpopularity}>
            <View style={[styles.categorycontainer,{marginLeft:0}]}>
                <Text style={styles.categorttext}>{language}</Text>
            </View>
            <View style={[styles.categorycontainer,{paddingHorizontal:24}]}>
                <Text style={styles.categorttext}>{popularity}</Text>
            </View>
            <View style={[styles.categorycontainer,{paddingHorizontal:24}]}>
                <Image source={require("../assets/star.png")} resizeMode="contain" style={{width:15,height:15,marginRight:5}}/>
                <Text style={styles.categorttext}>{rating}</Text>
            </View>
        </View>
    )
}

export default MovieVotesAndPopularity;