import { StyleSheet } from "react-native";
import { COLORS } from "~styles";

const styles = StyleSheet.create({
    container:{
        paddingTop: 15,
        paddingBottom:5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent:"space-between"
    },
    text:{
        fontSize: 18,
        color:COLORS.WHITE,
        borderBottomColor:COLORS.GREEN,
        textDecorationColor:COLORS.GRAY,
        textShadowColor:COLORS.GRAY,
        textShadowOffset:{width:0.5,height:0.5}
    },
    favouriteListText:{
        fontSize: 16,
        fontWeight:"500",
        color:COLORS.SKYBLUE,
        borderBottomColor:COLORS.GREEN,
        // textDecorationLine:"underline",
        textDecorationColor:COLORS.GRAY,
        textShadowColor:COLORS.GRAY,
        textShadowOffset:{width:0.5,height:0.5}
    }
})

export default styles;