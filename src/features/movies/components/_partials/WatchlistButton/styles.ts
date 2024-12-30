import { StyleSheet } from "react-native";
import { COLORS, Fonts } from "~styles";

const styles = StyleSheet.create({
    
    wishListTextStyle: {
        color: COLORS.WHITE,
        fontSize: 16,
        fontWeight:"700",
        fontFamily: Fonts.RalewayBold
    },
    wishlistBtn: {
        flexDirection:"row",
        alignSelf:"center",
        marginTop:16,
        backgroundColor:COLORS.LIGHT_GRAY,
        paddingHorizontal:8,
        paddingVertical:5,
        borderRadius:5
    },
    imageStyle: {
        width:20,
        height:20,
        tintColor:COLORS.WHITE,
        marginRight:10
    }
})

export default styles;