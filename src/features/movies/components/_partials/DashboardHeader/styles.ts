import { StyleSheet } from "react-native";
import { COLORS } from "~styles";


const styles = StyleSheet.create({
    container:{
        height:50,
        flexDirection:"row",
        backgroundColor:COLORS.PRIMARY,
        // backgroundColor:COLORS.GREEN,
        // borderTopLeftRadius:5,
        // borderTopRightRadius:5,
        alignItems:"center",
        justifyContent:"center",
        // justifyContent:"space-between",
        paddingHorizontal:15
    },
    image:{
        height:"100%",
        width:50,
        margin:0,
    },
    text:{
        fontSize:18,
        color:COLORS.WHITE,
        fontWeight:"700",
        letterSpacing:1,
        fontFamily:"Times",
        // opacity:0.3
        
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