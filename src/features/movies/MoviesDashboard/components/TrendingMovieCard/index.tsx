import React from 'react';
import { View,Image,Text,TouchableWithoutFeedback, ImageSourcePropType, ImageBackground } from 'react-native';
import styles from './styles';

interface Iprops{
    item:{
        id?:number
        backPoster?: string
        popularity?:number
        title?:string
        poster?: ImageSourcePropType
        overview?: string
        rating?:number
        language?:string
        video?:boolean
    }
}


const TrendingMovieCard: React.FC<Iprops> =({item})=> {

    
    return (
        <TouchableWithoutFeedback  onPress={() =>{}}>
            <View style={styles.container}>
                <ImageBackground style={styles.image} source={item.poster} resizeMode="cover">
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