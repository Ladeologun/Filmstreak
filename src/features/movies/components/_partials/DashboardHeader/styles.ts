import { StyleSheet } from "react-native";
import { COLORS, Fonts } from "~styles";


const styles = StyleSheet.create({
    container:{
        height:50,
        flexDirection:"row",
        backgroundColor:COLORS.PRIMARY,
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:15
    },
    image:{
        height:"100%",
        width:50,
        margin:0,
    },
    text:{
        fontSize:22,
        color:COLORS.WHITE,
        fontWeight:"700",
        letterSpacing:1,
        fontFamily:Fonts.GupterBold,
        
    },
   
    textcontainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
        // backgroundColor:"red",
        // paddingRight:30
    }
})

export default styles;