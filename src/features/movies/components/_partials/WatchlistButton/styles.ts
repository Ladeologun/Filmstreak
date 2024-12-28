import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";
import { COLORS } from "~styles";

const styles = StyleSheet.create({
    
    wishListTextStyle: {
        color: COLORS.WHITE,
        fontSize: 16,
        fontWeight:"600"
    },
    wishlistBtn: {
        flexDirection:"row",
        alignSelf:"center",
        marginTop:16,
        // backgroundColor:"red",
        backgroundColor:"#363636",
        paddingHorizontal:8,
        paddingVertical:5,
        borderRadius:5
    },
    imageStyle: {
        width:20,
        height:20,
        tintColor:"#fff",
        marginRight:10
    }
})

export default styles;