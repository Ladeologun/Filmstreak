import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import {ScreenWrapper} from '~components';
import { COLORS } from '~styles';
import { DataType, syncMoviesFromTMDB } from '~movies/api';
import { Movie } from '~movies/types';
import DetailsHeader from '../_partials/DetailsHeader';
import { carouselDummyData } from '../../../../data';
import { STAR_LOGO } from '~movies/constants';

const MovieWishlist: React.FC = () => {

  const [fetchingMovies, setFetchingMovies] = useState(false);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  const onResultFetched = (data:DataType, errors:string[]) => {

    setNowPlayingMovies(data?.nowPlayingMovies);
    setPopularMovies(data?.popularMovies);
    setFetchingMovies(false);

  };

//   useEffect(()=>{ 
//     setFetchingMovies(true);
//     syncMoviesFromTMDB(onResultFetched)
//   },[])

  
  return (
    <ScreenWrapper containerStyle={{backgroundColor:"#080C28"}} hideStatusBar={true}>
        <DetailsHeader 
            containerStyle={styles.containerStyle} 
            hasTitle 
            title='Wishlist ❤️'
            titleStyle={{fontWeight:"700",fontSize:18}}
        />

        <View style={styles.wishlistItemCard}>
            <View style={{borderRadius:8,marginRight:15}}>
                <Image 
                    source={carouselDummyData[0]?.poster} 
                    style={{height:100,width:100,borderRadius:8}} 
                    resizeMode="cover"
                />
            </View>
            <View style={{justifyContent:"center"}}>
                <Text style={styles.titleStyle}>Seven Dooors</Text>
                <Text style={styles.releaseYearStyle}>Release Year 2012</Text>
                <View style={styles.votesandpopularity}>
                    <View style={[styles.categorycontainer,{paddingHorizontal:0,marginLeft:0}]}>
                        <Text style={styles.categorttext}>{`❤️ 9`}</Text>
                    </View>
                    <View style={[styles.categorycontainer,{paddingHorizontal:2}]}>
                        <Image source={STAR_LOGO} resizeMode="contain" style={{width:15,height:15,marginRight:5}}/>
                        <Text style={styles.categorttext}>{8}</Text>
                    </View>
                </View>
            </View>
        </View>


        <View style={[styles.wishlistItemCard,{backgroundColor:"#080C28"}]}>
            <View style={{borderRadius:8,marginRight:15}}>
                <Image 
                    source={carouselDummyData[0]?.poster} 
                    style={{height:100,width:100,borderRadius:8}} 
                    resizeMode="cover"
                />
            </View>
            <View style={{justifyContent:"center"}}>
                <Text style={{color:COLORS.WHITE}}>Seven Dooors</Text>
                <Text style={{color:COLORS.WHITE}}>Release Year 2012</Text>
                <View style={styles.votesandpopularity}>
                    <View style={[styles.categorycontainer,{paddingHorizontal:0,marginLeft:0}]}>
                        <Text style={styles.categorttext}>{`❤️ 9`}</Text>
                    </View>
                    <View style={[styles.categorycontainer,{paddingHorizontal:2}]}>
                        <Image source={STAR_LOGO} resizeMode="contain" style={{width:15,height:15,marginRight:5}}/>
                        <Text style={styles.categorttext}>{8}</Text>
                    </View>
                </View>
            </View>
        </View>

      
    </ScreenWrapper>
  );
};

export default MovieWishlist;
