import { Platform } from "react-native";

export const Fonts = {
    ...Platform.select(
        {
            ios:{
                CaveatBold:"Caveat-Bold",
                CaveatMedium:"Caveat-Medium",
                CaveatRegular:"Caveat-Regular",
                CaveatSemiBold:"Caveat-SemiBold",
                CreepsterRegular:"Creepster-Regular",
                GupterBold:"Gupter-Bold",
                GupterMedium:"Gupter-Medium",
                GupterRegular:"Gupter-Regular",
                PermanentMarkerRegular:"PermanentMarker-Regular",
                RalewayBlack: "Raleway-Black",
                RalewayBlackItalic: "Raleway-BlackItalic",
                RalewayBold: "Raleway-Bold",
                RalewayBoldItalic: "Raleway-BoldItalic",
                RalewayExtraBold: "Raleway-ExtraBold",
                RalewayExtraLight: "Raleway-ExtraLight",
                RalewayExtraLightItalic: "Raleway-ExtraLightItalic",
                RalewayItalic: "Raleway-Italic",
                RalewayLight: "Raleway-Light",
                RalewayLightItalic: "Raleway-LightItalic",
                RalewayMedium: "Raleway-Medium",
                RalewayMediumItalic: "Raleway-MediumItalic",
                RalewayRegular: "Raleway-Regular",
                RalewaySemiBold: "Raleway-SemiBold",
                RalewaySemiBoldItalic: "Raleway-SemiBoldItalic"
            },
            android: {
                CaveatBold:"CaveatBold",
                CaveatMedium:"CaveatMedium",
                CaveatRegular:"CaveatRegular",
                CaveatSemiBold:"CaveatSemiBold",
                CreepsterRegular:"CreepsterRegular",
                GupterBold:"GupterBold",
                GupterMedium:"GupterMedium",
                GupterRegular:"GupterRegular",
                PermanentMarkerRegular:"PermanentMarkerRegular",
                RalewayBlack: "RalewayBlack",
                RalewayBlackItalic: "RalewayBlackItalic",
                RalewayBold: "RalewayBold",
                RalewayBoldItalic: "RalewayBoldItalic",
                RalewayExtraBold: "RalewayExtraBold",
                RalewayExtraLight: "RalewayExtraLight",
                RalewayExtraLightItalic: "RalewayExtraLightItalic",
                RalewayItalic: "RalewayItalic",
                RalewayLight: "RalewayLight",
                RalewayLightItalic: "RalewayLightItalic",
                RalewayMedium: "RalewayMedium",
                RalewayMediumItalic: "RalewayMediumItalic",
                RalewayRegular: "RalewayRegular",
                RalewaySemiBold: "RalewaySemiBold",
                RalewaySemiBoldItalic: "RalewaySemiBoldItalic"
            }
        }
    )
};

