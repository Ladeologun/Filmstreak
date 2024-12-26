import React, {PropsWithChildren, useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import styles from './styles';
import {ScreenWrapper} from '~components';
import TrendingMoviesCarousel from '../_partials/TrendingMoviesCarousel';
import PopularMovie from '../_partials/PopularMovies';
import DashboardHeader from '../_partials/DashboardHeader';
import { COLORS } from '~styles';
import { DataType, syncMoviesFromTMDB } from '~movies/api';
import { Movie } from '~movies/types';

const MoviesDashboard: React.FC = () => {
  //CHANGE the flex to 1 when fetching data;

  const [fetchingMovies, setFetchingMovies] = useState(false);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  const onResultFetched = (data:DataType, errors:string[]) => {
    setNowPlayingMovies(data?.nowPlayingMovies);
    setPopularMovies(data?.popularMovies);
    setFetchingMovies(false)
  };

  useEffect(()=>{
    setFetchingMovies(true);
    syncMoviesFromTMDB(onResultFetched)
  },[])

  
  return (
    <ScreenWrapper>
      <DashboardHeader title='FILMSTREAK' isLoading={fetchingMovies}/>
      <ScrollView contentContainerStyle={[styles.contentContainerStyle, fetchingMovies && {flex:1}]}>

       {!!fetchingMovies ? 
          (<ActivityIndicator size={"large"} color={COLORS.SKYBLUE} style={{marginBottom:60}}/>) :
          (<React.Fragment>
              <TrendingMoviesCarousel movies={nowPlayingMovies?.slice(0,5)} />
              <PopularMovie movies={popularMovies} />
              <PopularMovie movies={popularMovies}/>
            </React.Fragment>
          )
        }
      </ScrollView>
    </ScreenWrapper>
  );
};

export default MoviesDashboard;
