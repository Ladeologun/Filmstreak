import { StyleSheet, Platform, StatusBar } from "react-native";
import { COLORS } from "~styles";

// console.log(StatusBar.currentHeight)
//StatusBar.currentHeight only has a value on android, it gives null on ios

const styles =  StyleSheet.create({
    screen: {
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight: 0,
        backgroundColor: COLORS.PRIMARY,
        flex:1,
        paddingHorizontal:25,
    },
    // backgroundArc: {
    //     position:"absolute",
    //     top: Platform.OS == "android" ? StatusBar.currentHeight : 48,
    //     left:0,
    //     zIndex:-99
    // },
    // innerWrapper: {
    //     paddingHorizontal: 17,
    //     flex:1,
    //     borderWidth:1,
    //     borderColor:"red"
    // }
});

export default styles;