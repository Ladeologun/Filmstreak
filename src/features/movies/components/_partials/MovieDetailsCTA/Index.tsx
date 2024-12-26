import { Image, TouchableOpacity, View } from "react-native";
import styles from "./styles";

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
                {!!addedToWishlist ?
                    <Image source={require("../assets/heart.png")} style={{width:20,height:20,tintColor:"red"}}/>:
                    <Image source={require("../assets/love.png")} style={{width:20,height:20,tintColor:"#fff"}}/>
                }
            </TouchableOpacity>

        </View>
    )
}

export default MovieDetailsCTA;