import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";
import { COLORS } from "~styles";

const {width,height} = Dimensions.get("screen")
const styles = StyleSheet.create({
    dotView: { 
        flexDirection: 'row', 
        justifyContent: 'center' 
    },
    positionIndicatorWrapper: {
        width:"100%",
        height:25,
        alignItems:"center",
        justifyContent:"flex-end", 
        backgroundColor: COLORS.PRIMARY
    }
})

export default styles;