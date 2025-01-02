import { StyleSheet, Platform, StatusBar } from "react-native";
import { COLORS } from "~styles";

const styles =  StyleSheet.create({
    screen: {
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight: 0,
        backgroundColor: COLORS.PRIMARY,
        flex:1,
        paddingHorizontal:25,
    }
});

export default styles;