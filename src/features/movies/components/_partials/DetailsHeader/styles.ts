import { StyleSheet, Platform } from "react-native";
import { COLORS } from "~styles";

const styles = StyleSheet.create({
    barcontainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:Platform.OS ==="ios"? 40: 20,
        paddingHorizontal:24,
    },
    backarrow:{
        justifyContent:"center",
        alignItems:"center",
        width:50,
        height:50,
        borderRadius:20,
        backgroundColor:'rgba(0, 0, 0, 0.4)'
    },
    leftIconStyle: {
        width: 20, 
        height: 20, 
        tintColor: COLORS.WHITE
    }
})

export default styles;