import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";
import { COLORS, Fonts } from "~styles";


const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
    
    background:{
        width:"100%",
        height:height < 700 ? height* 0.5:height*0.65
    },
    
    title:{
        color:COLORS.WHITE,
        marginTop:8,
        fontFamily: Fonts.PermanentMarkerRegular,
        fontSize: 30, 
        lineHeight: 36
    },
    titleContainer:{
        width:"100%",
        height:200,
        alignItems:"center",
        justifyContent:"flex-end", 
        backgroundColor:"rgba(15, 17, 29, 0.2)"
    },
    titleWrapper: {
        flex: 1, 
        justifyContent: 'flex-end'
    },
    containerStyle:{
        marginTop: 4, 
        paddingHorizontal:10
    }

})

export default styles;