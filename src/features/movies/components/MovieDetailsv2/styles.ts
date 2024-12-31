import { Dimensions, StyleSheet } from "react-native";
import { COLORS, Fonts } from "~styles";

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    contentcontainer:{
        flex:1,
        backgroundColor:COLORS.PRIMARY, 
    },
    container:{
        backgroundColor:COLORS.PRIMARY
    },
    overviewcon:{
        paddingHorizontal:12,
        marginTop:8,
        justifyContent:"center",
    },
    textdetails:{
        color:COLORS.WHITE,
        fontSize:19,
        fontFamily:Fonts.CaveatSemiBold,
        marginTop:8,
        fontWeight:"100"
    },
    textoverview:{
        fontFamily: Fonts.PermanentMarkerRegular,
        fontSize:18,
        color: COLORS.WHITE
    },
    movieDetailsSection: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:4,
    },
    imgStyle: {
        height: 0.45*height, 
        width: '100%', 
        borderRadius: 8
    }

})

export default styles;