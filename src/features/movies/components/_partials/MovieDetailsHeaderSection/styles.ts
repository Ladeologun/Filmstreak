import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";
import { COLORS } from "~styles";


const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
    
    background:{
        width:"100%",
        height:height < 700 ? height* 0.6:height*0.7
    },
    
    title:{
        color:COLORS.WHITE,
        marginTop:8,
        // fontFamily: "Avenir", 
        fontSize: 30, 
        lineHeight: 36
    }

})

export default styles;