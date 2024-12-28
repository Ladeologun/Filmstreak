import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";
import { COLORS } from "~styles";

const styles = StyleSheet.create({
    
    votesandpopularity:{
        flexDirection:"row",
        marginTop:8,
        alignItems:"center",
        justifyContent:"center",
    },
    categorycontainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'center',
        marginLeft:8,
        paddingHorizontal:8,
        paddingVertical:3,
        borderRadius:8,
        backgroundColor:"#363636",
    },
    categorttext:{
        color:"#fff",
        fontSize:14, 
        lineHeight: 22,
        // fontFamily:"Avenir"
    },
    wishListTextStyle: {
        color: COLORS.WHITE,
        fontSize: 16,
        fontWeight:"600"
    },
    wishlistBtn: {
        flexDirection:"row",
        alignSelf:"center",
        marginTop:16,
        backgroundColor:"red",
        paddingHorizontal:8,
        paddingVertical:5,
        borderRadius:5
    }

})

export default styles;