import React from 'react';
import { View,ImageBackground,TouchableOpacity,Text, Image} from 'react-native';
import styles from './styles';
import { Movie } from '~movies/types';


interface Iprops{item:Movie}
const MovieCard: React.FC<Iprops> =({item})=> {
   

    return (
        <View style={styles.container}>

            <ImageBackground style={styles.imagebackground} source={item.poster}>
                <TouchableOpacity onPress={() => {}}>
                    <Image source={require("../../assets/drawables/play-button.png")} style={styles.playBtnStyle}/>
                </TouchableOpacity>
            </ImageBackground>

            <Text numberOfLines={1} style={styles.text}> {item.title} </Text>
        </View>
    );
}


export default MovieCard;