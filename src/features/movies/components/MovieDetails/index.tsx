import React from 'react';
import { View,Text,ScrollView} from 'react-native';
import styles from './styles';
import MovieDetailsHeaderSection from '../_partials/MovieDetailsHeaderSection';
import MovieVotesAndPopularity from '../_partials/MovieVotesAndPopularity';





const MovieDetailsScreen:React.FC = () => {

    
    // const movie_id = route.params.id
   
    





    // function renderMovieDetails(){
    //     return(
            
    //     )
    // }

    return (
        <ScrollView contentContainerStyle={styles.contentcontainer} style={styles.container}>
            {/* <MovieDetailsHeaderSection /> */}
            {/* <MovieVotesAndPopularity /> */}
            <View style={styles.overviewcon}>
                <Text style={styles.textoverview}>Overview</Text>
                {/* <Text numberOfLines={5} style={styles.textdetails}>{route.params.overview}</Text> */}
            </View>

        </ScrollView>
    );
}

export default MovieDetailsScreen;