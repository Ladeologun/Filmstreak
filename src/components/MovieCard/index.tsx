import React from 'react';
import { View,ImageBackground,TouchableOpacity,Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import { Movie, NavigationTypes } from '~movies/types';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '~navigation/routes';


interface Iprops{item:Movie}
const MovieCard: React.FC<Iprops> =({item})=> {
    const navigation = useNavigation<NavigationTypes>()

    return (
        <TouchableWithoutFeedback

        onPress={() =>{
            navigation.navigate(ROUTES.MOVIE_DETAILS, {movie:item})
        }}
        
        
        >
        <View style={styles.container}>

            <ImageBackground style={styles.imagebackground} source={{uri: item.poster}}>
                {/* <TouchableOpacity onPress={() => {}}> */}
                    <Image source={require("../../assets/drawables/play-button.png")} style={styles.playBtnStyle}/>
                {/* </TouchableOpacity> */}
            </ImageBackground>

            <Text numberOfLines={1} style={styles.text}> {item.title} </Text>
        </View>
        </TouchableWithoutFeedback>
    );
}


export default MovieCard;