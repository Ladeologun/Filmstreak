import React, { PropsWithChildren } from "react";
import { StatusBar, SafeAreaView,Text, View} from "react-native";
import styles from "./styles";


type ScreenProps = {
    hideStatusBar?: boolean
}

const ScreenWrapper: React.FC<PropsWithChildren<ScreenProps>> = ({
    children,
    hideStatusBar = false,
}) => {
    
    return (
        <SafeAreaView style={styles.screen}>
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
