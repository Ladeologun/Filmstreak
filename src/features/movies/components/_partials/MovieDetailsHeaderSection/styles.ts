import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";
import { COLORS } from "~styles";


const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
    
    background:{
        width:"100%",
        height:height < 700 ? height* 0.5:height*0.65
    },
    
    title:{
        color:COLORS.WHITE,
        marginTop:8,
        // fontFamily: "Avenir", 
        fontSize: 30, 
        lineHeight: 36
    },
    gradientOvelay: {
        position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 200,
    backgroundColor: 'rgba(15, 17, 29, 0.7)', // Dark semi-transparent color
    zIndex: 1,
    }

})

export default styles;