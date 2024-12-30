import { StyleSheet } from "react-native";
import { COLORS, Fonts } from "~styles";

const styles = StyleSheet.create({
    
    votesandpopularity:{
        flexDirection:"row",
        marginVertical:16
    },
    categorycontainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'center',
        paddingHorizontal:8,
        paddingVertical:3,
        borderRadius:8,
        backgroundColor:COLORS.LIGHT_GRAY,
    },
    categorttext:{
        color:"#fff",
        fontSize:14, 
        lineHeight: 22,
       fontFamily: Fonts.RalewayBold
    },
    title:{
        color: COLORS.WHITE,
        fontSize:24,
        fontFamily: Fonts.CreepsterRegular
    },
    imageStyle:{
        width: 15, 
        height: 15, 
        marginRight: 5
    },
    btnStyle: {
        alignSelf: 'flex-start', 
        marginTop: 0, 
        paddingVertical: 8
    }

})

export default styles;