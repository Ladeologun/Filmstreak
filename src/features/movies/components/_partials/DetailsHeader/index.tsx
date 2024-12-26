import { Image, TouchableOpacity, View } from "react-native";
import styles from "./styles";


const DetailsHeader:React.FC = () => {

    return(
        <View style={styles.barcontainer}>
            <TouchableOpacity style={styles.backarrow} onPress={()=>{}}>
                <Image source={require("../assets/left-arrow.png")} style={{width:20,height:20,tintColor:"#fff"}}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.backarrow} onPress={()=>{}}>
                <Image source={require("../assets/upload.png")} style={{width:20,height:20,tintColor:"#fff"}}/>
            </TouchableOpacity>

        </View>
    )
}

export default DetailsHeader;