import React, {useEffect, useState} from 'react';
import {ActivityIndicator, RefreshControl, ScrollView} from 'react-native';
import styles from './styles';
import {ErrorInfoModal, ScreenWrapper} from '~components';
import TrendingMoviesCarousel from '../_partials/TrendingMoviesCarousel';
import MovieCarouselSection from '../_partials/MovieCarouselSection';
import DashboardHeader from '../_partials/DashboardHeader';
import {COLORS} from '~styles';
import {DataType, syncMoviesFromTMDB} from '~movies/api';
import {Movie} from '~movies/types';

const MoviesDashboard: React.FC = () => {
   const [fetchingMovies, setFetchingMovies] = useState(false);
   const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);
   const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
   const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
   const [showErrorModalMessage, setShowErrorModalMessage] = useState('');
   const [isRefreshing, setRefreshing] = useState(false);

   const onResultFetched = (data: DataType, errors: string[]) => {
      setNowPlayingMovies(data?.nowPlayingMovies);
      setPopularMovies(data?.popularMovies);
      setUpcomingMovies(data?.upcomingMovies);
      setFetchingMovies(false);
      setRefreshing(false);

      if (!!errors.length) {
         setShowErrorModalMessage(errors?.[0]);
      }
   };

   useEffect(() => {
      setFetchingMovies(true);
      syncMoviesFromTMDB(onResultFetched);
   }, []);

   const refreshHomeScreen = async () => {
      setRefreshing(true);
      syncMoviesFromTMDB(onResultFetched);
   };

   return (
      <ScreenWrapper>
         <DashboardHeader title="FILMSTREAK" isLoading={fetchingMovies} />
         <ScrollView
            contentContainerStyle={[styles.contentContainerStyle, fetchingMovies && {flex: 1}]}
            refreshControl={
               <RefreshControl
                  refreshing={isRefreshing}
                  onRefresh={refreshHomeScreen}
                  style={styles.refreshControlStyle}
                  tintColor={COLORS.SKYBLUE}
               />
            }>
            {!!fetchingMovies ? (
               <ActivityIndicator
                  size={'large'}
                  color={COLORS.SKYBLUE}
                  style={{marginBottom: 60}}
               />
            ) : (
               <React.Fragment>
                  <TrendingMoviesCarousel movies={nowPlayingMovies?.slice(0, 5)} />
                  {!!nowPlayingMovies?.length && (
                     <MovieCarouselSection
                        movies={nowPlayingMovies?.slice(5)}
                        title="Now Playing"
                        showRightCTA={true}
                     />
                  )}
                  {!!popularMovies?.length && <MovieCarouselSection movies={popularMovies} />}
                  {!!upcomingMovies?.length && (
                     <MovieCarouselSection movies={upcomingMovies} title="Upcoming" />
                  )}
               </React.Fragment>
            )}

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

export default MoviesDashboard;
