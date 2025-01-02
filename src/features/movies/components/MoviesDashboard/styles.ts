import { StyleSheet } from "react-native";
import { COLORS } from "~styles";

const styles =  StyleSheet.create({
    contentContainerStyle: {
        paddingHorizontal:10,
        justifyContent:"center",
        flex:0
    },
    refreshControlStyle: {
        backgroundColor: COLORS.PRIMARY
    },
});

export default styles;