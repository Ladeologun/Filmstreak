import { ActivityIndicator, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { ADD_ICON, LOVE } from "~movies/constants";
import { COLORS } from "~styles";

interface Iprops {
    isOnwishlist:boolean;
    addingTowishlist:boolean;
    handleBtnPress:()=>void
}


const WatchlistButton:React.FC<Iprops> = ({
    isOnwishlist,
    addingTowishlist,
    handleBtnPress
}) => {

    let message = isOnwishlist ? "Saved to wishlist": "Add to wishlist";
    return (
        <TouchableOpacity 
            onPress={handleBtnPress}
            disabled={addingTowishlist}
        >
            <View style={[styles.wishlistBtn, isOnwishlist && {backgroundColor:"red"}]}>
                {!!addingTowishlist ? 
                    <ActivityIndicator size={"small"} color={COLORS.WHITE} style={{marginRight:10}}/> 
                    : !isOnwishlist ? <Image source={ADD_ICON} style={styles.imageStyle}/>
                    : <Image source={LOVE} style={styles.imageStyle}/>
                }
                <Text style={styles.wishListTextStyle}>{message}</Text>
            </View>
        </TouchableOpacity>
    )

}

export default WatchlistButton;