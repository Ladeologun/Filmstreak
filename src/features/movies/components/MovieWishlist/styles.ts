import { StyleSheet, Platform, StatusBar } from "react-native";
import { COLORS, Fonts } from "~styles";

const styles =  StyleSheet.create({
    contentContainerStyle: {
        paddingHorizontal:10,
        justifyContent:"center",
        flex:0
    },
    wishlistItemCard:{
        padding:10,
        opacity:0.8,
        backgroundColor:COLORS.SECONDARY_SUBTHEME,
        flexDirection:"row"
    },
    
    containerStyle: {
        marginTop:0,
        paddingHorizontal:10,
        marginBottom:16
    },
    emptyView: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        paddingHorizontal: 24
    },
    listContentContainer: {
        flex:1
    },
    listContainer: {
        flex: 1,
        backgroundColor:"#080C28"
    },
    listItemContainer: {
        gap: 8,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row"
    },
    listItemText: {
        fontSize: 17,
        lineHeight: 25,
        color: "rgba(13, 24, 33, 1)"
    },
    listFooterLoadingNextPageContainer: {
        backgroundColor:"#080C28",
        paddingVertical: 16,
        alignItems: "center",
        justifyContent: "center"
    },
    listFooterLoadingNextPageText: {
        fontSize: 17,
        lineHeight: 25,
        color: COLORS.BLACK
    },
    emptyViewTitle: {
        fontSize: 21,
        lineHeight: 29,
        color: COLORS.SKYBLUE,
        marginTop: 16,
        textAlign: "center"
    },
    emptyViewBody: {
        fontSize: 17,
        lineHeight: 25,
        color: COLORS.SKYBLUE,
        marginTop: 6,
        textAlign: "center"
    },
    titleStyle: {
        fontFamily:Fonts.GupterBold,
        fontWeight:"700",
        fontSize:23,
        textTransform:"uppercase",
        color: COLORS.SKYBLUE
    }
});

export default styles;