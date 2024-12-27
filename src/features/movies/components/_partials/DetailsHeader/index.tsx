import { Image, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { LEFT_ARROW, UPLOAD } from "~movies/constants";
import { useNavigation } from "@react-navigation/native";
import {Walkthrough} from "~components";
import { useEffect, useRef } from "react";
import { COLORS } from "~styles";
import { WalkthroughHandle } from "~components";


const DetailsHeader:React.FC = () => {
    const navigation = useNavigation();

    const wishlistWalkthroughRef = useRef<WalkthroughHandle|null>(null)

    useEffect(()=>{
        wishlistWalkthroughRef?.current?.open();
    })

    return(
        <View style={styles.barcontainer}>
            <TouchableOpacity style={styles.backarrow} onPress={()=>{navigation.goBack()}}>
                <Image source={LEFT_ARROW} style={{width:20,height:20,tintColor:"#fff"}}/>
            </TouchableOpacity>

            <Walkthrough
                ref={wishlistWalkthroughRef}
                onNext={() => {
                    wishlistWalkthroughRef?.current?.close();
                }}
                hidePrevious
                contentTitle="Wishlist"
                nextBtnText="Done"
                contentDesc="Click this icon to view movies in your wishlist"
                contentContainerStyle={{ alignSelf: "flex-end", marginRight: 15 }}
                triangleStyle={{ right: 12 }}
                backgroundColor={COLORS.PRIMARY}
            
            >
                <TouchableOpacity style={styles.backarrow} onPress={()=>{}}>
                    <Image source={UPLOAD} style={{width:25,height:25}}/>
                </TouchableOpacity>
            </Walkthrough>
        </View>
    )
}

export default DetailsHeader;