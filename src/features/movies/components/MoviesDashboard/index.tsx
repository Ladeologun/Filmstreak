import React, {PropsWithChildren} from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import styles from './styles';
import {ScreenWrapper} from '~components';
import TrendingMoviesCarousel from '../_partials/TrendingMoviesCarousel';
import PopularMovie from '../_partials/PopularMovies';
import DashboardHeader from '../_partials/DashboardHeader';
import { COLORS } from '~styles';

const MoviesDashboard: React.FC = () => {
  //CHANGE the flex to 1 when fetching data
  return (
    <ScreenWrapper>
      <DashboardHeader title='FILMSTREAK'/>
      <ScrollView contentContainerStyle={{paddingHorizontal:10,justifyContent:"center",flex:0}}> 
          <TrendingMoviesCarousel />
          <PopularMovie />
          <PopularMovie />
          
          {/* <ActivityIndicator size={"large"} color={COLORS.SKYBLUE} style={{marginBottom:60}}/> */}
      </ScrollView>
    </ScreenWrapper>
  );
};

export default MoviesDashboard;
