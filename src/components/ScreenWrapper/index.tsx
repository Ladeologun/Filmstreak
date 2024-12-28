import React, { PropsWithChildren } from "react";
import { StatusBar, SafeAreaView,Text, View, ViewStyle} from "react-native";
import styles from "./styles";


type ScreenProps = {
    hideStatusBar?: boolean
    containerStyle?:ViewStyle
}

const ScreenWrapper: React.FC<PropsWithChildren<ScreenProps>> = ({
    children,
    containerStyle,
    hideStatusBar = false,
}) => {
    
    return (
        <SafeAreaView style={[styles.screen,containerStyle]}>
            <StatusBar
                barStyle="light-content"
                hidden={hideStatusBar}
                translucent={true}
            /> 
            {children}
        </SafeAreaView>
    );
};
export default ScreenWrapper;
