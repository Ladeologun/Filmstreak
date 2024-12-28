import { StyleSheet, Platform, Dimensions } from "react-native";
import { COLORS } from "~styles";


const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
    contentcontainer:{
        flex:1,
        backgroundColor:COLORS.PRIMARY
    },
    container:{
        backgroundColor:COLORS.PRIMARY
    },
    background:{
        width:"100%",
        height:height < 700 ? height* 0.6:height*0.7
    },
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
    title:{
        color:"#fff",
        marginTop:8,
        fontFamily: "Avenir", 
        fontSize: 30, 
        lineHeight: 36
    },
    votesandpopularity:{
        flexDirection:"row",
        marginTop:8,
        alignItems:"center",
        justifyContent:"center",
    },
    categorycontainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'center',
        marginLeft:8,
        paddingHorizontal:8,
        paddingVertical:3,
        borderRadius:8,
        backgroundColor:"#363636",
    },
    categorttext:{
        color:"#fff",
        fontSize:14, 
        lineHeight: 22,
        // fontFamily:"Avenir"
    },
    overviewcon:{
        flex:1,
        paddingHorizontal:8,
        marginTop:8,
        justifyContent:"center",
    },
    textdetails:{
        color:COLORS.WHITE,
        fontSize:16,
        // fontFamily:"Avenir",
        marginTop:8,
        fontWeight:"100"
    },
    textoverview:{
        // fontFamily:"Avenir",
        fontSize:18,
        color: COLORS.WHITE
    }

})

export default styles;