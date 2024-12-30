import React, {useCallback} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';
import {Movie} from '~movies/types';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {ErrorInfoModal, ScreenWrapper} from '~components';
import DetailsHeader from '../_partials/DetailsHeader';
import MovieDetailCard from '../_partials/MovieDetailCard';
import {useMovieDetails} from '~hooks/useMovieDetails';

type RouteParams = {movie: Movie};

const MovieDetailsScreenV2: React.FC = () => {
   const route = useRoute();
   const {movie} = (route?.params as RouteParams) ?? {};

   const {
      addingMovieToWishlist,
      checkingMovieState,
      isMovieOnWishlist,
      showWatchlistWalkthrough,
      showErrorModalMessage,
      setShowErrorModalMessage,
      handleAddToWishlist,
      setCheckingMovieState,
      handleCheckMovieState,
      onWalkthroughClose,
   } = useMovieDetails(movie?.id);

   useFocusEffect(
      useCallback(() => {
         setCheckingMovieState(true);
         handleCheckMovieState();
      }, [movie?.id]),
   );

   return (
      <ScreenWrapper hideStatusBar={true}>
         <ScrollView
            contentContainerStyle={[styles.contentcontainer, {justifyContent: 'space-between'}]}
            style={styles.container}
         >
            <DetailsHeader
               containerStyle={{marginTop: 4, paddingHorizontal: 10}}
               hasRightCTA={true}
               showWalkthrough={showWatchlistWalkthrough}
               handleWalkthroughClose={onWalkthroughClose}
            />

            <View style={styles.movieDetailsSection}>
               <View style={{flex: 0.48}}>
                  <Image source={{uri: movie.poster}} style={styles.imgStyle} resizeMode="cover" />
               </View>
               <View style={{flex: 0.49}}>
                  <MovieDetailCard
                     title={movie?.title}
                     language={movie?.language}
                     popularity={movie?.popularity}
                     rating={movie?.rating}
                     id={movie.id}
                     addTowishlist={handleAddToWishlist}
                     isAddingMovieToWishlist={addingMovieToWishlist}
                     isMovieOnWishlist={isMovieOnWishlist}
                     isCheckingMovieState={checkingMovieState}
                  />
               </View>
            </View>

            <View style={[styles.overviewcon, {marginBottom: 20}]}>
               <Text style={styles.textoverview}>Overview</Text>
               <Text numberOfLines={5} style={styles.textdetails}>
                  {movie?.overview}
               </Text>
            </View>

            <ErrorInfoModal
               isModalVisible={!!showErrorModalMessage}
               handleModalDismiss={() => {
                  setShowErrorModalMessage('');
               }}
               desc={showErrorModalMessage}
            />
         </ScrollView>
      </ScreenWrapper>
   );
};

export default MovieDetailsScreenV2;
