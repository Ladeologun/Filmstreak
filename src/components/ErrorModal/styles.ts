import { StyleSheet, Dimensions } from "react-native";
import { COLORS} from "~styles";

const DeviceHeight = Dimensions.get("window").height;


export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#000000AA",
        justifyContent: "center",
        alignItems:"center"
    },
    wrapper: {
        backgroundColor: COLORS.SKYBLUE,
        width: "65%",
        maxHeight: DeviceHeight * 0.25,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        paddingHorizontal:10,
        paddingVertical: 7,
        paddingBottom:10
    },
    modalTitle: {
        fontSize: 17,
        lineHeight: 25,
    },
    optionContainer: {
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",

    },
   
    cancelButtonContainer: {
        width:"100%",
        alignItems:"flex-end"
    },

    divider: {
        borderBottomWidth: 1,
        borderBottomColor: "#EEF0F8",
        marginHorizontal: 10,
        width: '100%'

    },
    header: {
        fontSize: 17,
        fontWeight:"700",
        lineHeight: 25,
        marginTop:10,
        marginBottom:6,
        color: "black"
    },
    desc: {
        lineHeight: 25,
        fontSize:15,
        textAlign:"center",
        color: "black"
    },
    imageStyle:{
        height:24,
        width:24
    }

});
