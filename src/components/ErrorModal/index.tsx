import {Text,View,Modal,TouchableOpacity,ViewStyle, Image} from "react-native";
import React from "react";
import styles from "./styles";
import { COLORS } from "~styles";


interface Props {
    handleModalButtonPress?: ()=>void
    handleModalDismiss: ()=>void
    isModalVisible: boolean
    mainContainerStyle?: ViewStyle
    wrapperStyle?:ViewStyle
    desc?: string
}

const ErrorInfoModal:React.FC<Props> = ({
    handleModalDismiss,
    isModalVisible,
    mainContainerStyle,
    wrapperStyle,
    desc="An unknown error occurred"

}) => {


    return (
        <Modal
            visible={isModalVisible}
            onRequestClose={handleModalDismiss}
            transparent={true}
            animationType={"fade"}  
        >
            <TouchableOpacity onPress={handleModalDismiss} style={{flex:1}}>
                <View style={[styles.mainContainer, mainContainerStyle]}>
                    <View style={[styles.wrapper, wrapperStyle]}>
                        <View style={styles.cancelButtonContainer}>
                            <TouchableOpacity onPress={handleModalDismiss}>
                                <Image 
                                    source={require("../../assets/drawables/cancel.png")}
                                    tintColor={COLORS.PRIMARY}
                                    style={{height:30, width:30}} 
                                />
                            </TouchableOpacity>
                        </View>
                        <Image 
                            source={require("../../assets/drawables/info-icon.png")}
                            tintColor={COLORS.RED}
                            style={styles.imageStyle} 
                        />
                        <Text style={styles.header}>Error</Text>
                        <Text style={styles.desc}>{desc}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

export default ErrorInfoModal;
