import React from 'react';
import { View,Text,TouchableWithoutFeedback, ImageBackground } from 'react-native';
import styles from './styles';
import { Movie, NavigationTypes } from '~movies/types';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '~navigation/routes';

interface Iprops{item:Movie}

const TrendingMovieCard: React.FC<Iprops> = ({item})=> {
    const navigation = useNavigation<NavigationTypes>()

    
    return (
        <TouchableWithoutFeedback  
            onPress={() =>{navigation.navigate(ROUTES.MOVIE_DETAILS, {movie:item})}}
        >
            <View style={styles.container}>
                <ImageBackground style={styles.image} source={{uri: item.poster}} resizeMode="cover">
                    <View style={styles.textview}>
                        <Text style={styles.itemTitle}>{item.title} </Text>
                        <Text numberOfLines={2} style={styles.itemDescription}>{item.overview}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
}


export default TrendingMovieCard;