import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { HEART, LOVE } from "~movies/constants";

interface Iprops {
    addedToWishlist?:boolean
}


const MovieDetailsCTA:React.FC<Iprops> = ({addedToWishlist}) => {

    return(
        <View style={styles.barcontainer}>

            {/* <TouchableOpacity style={styles.backarrow} onPress={()=>{}}>
                <Image source={require("../assets/play-button.png")} style={{width:20,height:20,tintColor:"yellow"}}/>
            </TouchableOpacity> */}

            <TouchableOpacity 
                style={styles.backarrow} 
                onPress={()=>{}}
            >
                {/* {!!addedToWishlist ?
                    <Image source={HEART} style={{width:20,height:20,tintColor:"red"}}/>:
                    <Image source={LOVE} style={{width:20,height:20,tintColor:"#fff"}}/>
                } */}
                {/* <View>
                    <Image source={LOVE} style={{width:20,height:20,tintColor:"#fff"}}/>
                    <Text>Add to wishlist</Text>
                </View> */}
            </TouchableOpacity>

        </View>
    )
}

export default MovieDetailsCTA;