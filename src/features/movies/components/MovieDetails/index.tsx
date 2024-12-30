import React, {useCallback} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import MovieDetailsHeaderSection from '../_partials/MovieDetailsHeaderSection';
import MoviePreferenceSection from '../_partials/MoviePreferenceSection';
import {Movie} from '~movies/types';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {ErrorInfoModal, ScreenWrapper} from '~components';
import {useMovieDetails} from '~hooks/useMovieDetails';
import {COLORS} from '~styles';

type RouteParams = {movie: Movie; changeTheme: boolean};

const MovieDetailsScreen: React.FC = () => {
   const route = useRoute();
   const {movie, changeTheme} = (route?.params as RouteParams) ?? {};
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
      <ScreenWrapper
         containerStyle={{backgroundColor: changeTheme ? COLORS.SECONDARY : COLORS.PRIMARY}}
         hideStatusBar={true}
      >
         <ScrollView
            contentContainerStyle={[styles.contentcontainer, changeTheme && {backgroundColor: COLORS.SECONDARY}]}
            style={[styles.container]}
         >
            <MovieDetailsHeaderSection
               poster={movie?.poster}
               title={movie?.title}
               showWatchlistWalkthrough={showWatchlistWalkthrough}
               handleWalkthroughClose={onWalkthroughClose}
            />

            <MoviePreferenceSection
               language={movie?.language}
               popularity={movie?.popularity}
               rating={movie?.rating}
               id={movie.id}
               addTowishlist={handleAddToWishlist}
               isAddingMovieToWishlist={addingMovieToWishlist}
               isMovieOnWishlist={isMovieOnWishlist}
               isCheckingMovieState={checkingMovieState}
               changeTheme={changeTheme}
            />
            <View style={styles.overviewcon}>
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

export default MovieDetailsScreen;
