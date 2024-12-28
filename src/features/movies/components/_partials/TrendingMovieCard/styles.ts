import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";
import { COLORS } from "~styles";

const {width,height} = Dimensions.get("screen")
const styles = StyleSheet.create({
    container:{
        // flex:1,
        width:width,
        height:height * 0.40,
        // shadowColor:COLORS.WHITE,
        // shadowOffset:{width:0.5,height:0.5},
        // shadowOpacity:0.5,
        // shadowRadius:3,
        // elevation:5,
        // borderRadius:10,
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
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription: {
        color: 'white',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    }
})

export default styles;