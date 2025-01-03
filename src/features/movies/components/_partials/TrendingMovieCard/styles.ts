import { StyleSheet, Dimensions } from "react-native";
import { COLORS, Fonts } from "~styles";

const {width,height} = Dimensions.get("screen")
const styles = StyleSheet.create({
    container:{
        width:width,
        height:height * 0.40
    },

    textview:{
        position:"absolute",
        bottom:10,
        margin:10,
        left:5
    },
    image:{
        width:width,
        height:"100%"

    },
    itemTitle: {
        color: 'white',
        fontSize: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        fontFamily: Fonts.PermanentMarkerRegular,
        elevation: 5
    },
    itemDescription: {
        color: COLORS.WHITE,
        fontSize: 13,
        fontFamily:Fonts.RalewayRegular,
        fontWeight:"600",
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    }
})

export default styles;