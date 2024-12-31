import React from 'react';
import {View, ImageBackground, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import {Movie, NavigationTypes} from '~movies/types';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '~navigation/routes';

interface Iprops {
   item: Movie;
   section: string;
}
const MovieCard: React.FC<Iprops> = ({item, section}) => {
   const navigation = useNavigation<NavigationTypes>();

   return (
      <TouchableWithoutFeedback
         onPress={() => {
            if (section?.toLowerCase() == 'popular') {
               navigation.navigate(ROUTES.MOVIE_DETAILS_V2, {movie: item});
            } else {
               navigation.navigate(ROUTES.MOVIE_DETAILS, {
                  movie: item,
                  changeTheme: section?.toLowerCase() === 'upcoming',
               });
            }
         }}>
         <View style={styles.container}>
            <ImageBackground style={styles.imagebackground} source={{uri: item.poster}}>
               <Image
                  source={require('../../assets/drawables/play-button.png')}
                  style={styles.playBtnStyle}
               />
            </ImageBackground>

            <Text numberOfLines={1} style={styles.text}>
               {' '}
               {item.title}{' '}
            </Text>
         </View>
      </TouchableWithoutFeedback>
   );
};

export default MovieCard;
