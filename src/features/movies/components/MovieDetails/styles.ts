import { StyleSheet, Platform, Dimensions } from "react-native";
import { COLORS, Fonts } from "~styles";


const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
    contentcontainer:{
        flex:1,
        backgroundColor:COLORS.PRIMARY
    },
    container:{
        backgroundColor:COLORS.PRIMARY
    },
    overviewcon:{
        flex:1,
        paddingHorizontal:12,
        marginTop:8,
        justifyContent:"center",
    },
    textdetails:{
        color:COLORS.WHITE,
        fontSize:18,
        fontFamily:Fonts.RalewayRegular,
        marginTop:8,
        fontWeight:"100"
    },
    textoverview:{
        fontFamily: Fonts.RalewaySemiBold,
        fontSize:18,
        color: COLORS.WHITE
    }

})

export default styles;