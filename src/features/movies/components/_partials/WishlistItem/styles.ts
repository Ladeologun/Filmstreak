import { StyleSheet, Platform, StatusBar } from "react-native";
import { COLORS } from "~styles";

const styles =  StyleSheet.create({
    contentContainerStyle: {
        paddingHorizontal:10,
        justifyContent:"center",
        flex:0
    },
    wishlistItemCard:{
        padding:10,
        opacity:0.8,
        backgroundColor:"#171C48",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row"
    },
    votesandpopularity:{
        flexDirection:"row",
        marginTop:8,
        alignItems:"center",
        // justifyContent:"center",
    },
    categorycontainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'center',
        marginLeft:9,
        paddingHorizontal:8,
        paddingVertical:3,
        borderRadius:8,
        // backgroundColor:"#363636",
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
    },
    titleStyle: {
        fontSize:18,
        fontWeight:"500",
        color:COLORS.WHITE
    },
    releaseYearStyle: {
        color:COLORS.WHITE,
        marginTop:8
    },
    containerStyle: {
        marginTop:0,
        paddingHorizontal:10,
        marginBottom:16
    }
});

export default styles;