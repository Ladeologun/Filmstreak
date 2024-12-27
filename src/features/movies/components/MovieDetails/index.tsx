import React from 'react';
import { View,Text,ScrollView} from 'react-native';
import styles from './styles';
import MovieDetailsHeaderSection from '../_partials/MovieDetailsHeaderSection';
import MovieVotesAndPopularity from '../_partials/MovieVotesAndPopularity';
import { Movie } from '~movies/types';
import { useRoute } from '@react-navigation/native';


type RouteParams = {
    movie: Movie
}



const MovieDetailsScreen:React.FC = () => {

    const route  = useRoute()
    const {movie} = route?.params as RouteParams ?? {} 
   

    return (
        <ScrollView contentContainerStyle={styles.contentcontainer} style={styles.container}>
            <MovieDetailsHeaderSection addedToWishlist={true} poster={movie?.poster} title= {movie?.title} />
            <MovieVotesAndPopularity language={movie?.language} popularity={movie?.popularity} rating={movie?.rating}/>
            <View style={styles.overviewcon}>
                <Text style={styles.textoverview}>Overview</Text>
                <Text numberOfLines={5} style={styles.textdetails}>{movie?.overview}</Text>
            </View>

        </ScrollView>
    );
}

export default MovieDetailsScreen;