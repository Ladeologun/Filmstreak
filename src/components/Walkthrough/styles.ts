import { StyleSheet } from "react-native";
import { COLORS } from "~styles";

export default StyleSheet.create({
    contentContainer: {
        backgroundColor: COLORS.PRIMARY,
        left: 0,
        right: 0,
        alignSelf: "flex-end",
        padding: 12,
        width: "65%",
        borderRadius: 8,
        gap: 8
    },
    headerText: {
        // fontFamily: Fonts.CalibreMedium,
        fontSize: 17,
        lineHeight: 25,
        color: COLORS.SKYBLUE
    },
    headerDesc: {
        // fontFamily: Fonts.Calibre,
        fontSize: 15,
        lineHeight: 22,
        color: COLORS.SKYBLUE
    },
    headerActionContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerActionBtnText: {
        // fontFamily: Fonts.CalibreMedium,
        fontSize: 17,
        lineHeight: 25,
        color: COLORS.SKYBLUE
    },
    headerActionBtnTextNext: {
        color: COLORS.SKYBLUE
    }
})