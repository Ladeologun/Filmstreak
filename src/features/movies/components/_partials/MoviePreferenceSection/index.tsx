import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import {STAR_LOGO} from '~movies/constants';
import WatchlistButton from '../WatchlistButton/Index';

interface Iprops {
   id: number;
   language: string;
   popularity: number;
   rating: number;
   addTowishlist: (status: boolean) => void;
   isAddingMovieToWishlist: boolean;
   isMovieOnWishlist: boolean;
   isCheckingMovieState: boolean;
   changeTheme: boolean
}

const MoviePreferenceSection: React.FC<Iprops> = ({
   language,
   popularity,
   rating,
   addTowishlist,
   isAddingMovieToWishlist,
   isMovieOnWishlist,
   isCheckingMovieState,
   changeTheme
}) => {
   return (
      <React.Fragment>
         <View style={styles.votesandpopularity}>
            <View style={[styles.categorycontainer, {marginLeft: 0}]}>
               <Text style={styles.categorttext}>{language}</Text>
            </View>
            <View style={[styles.categorycontainer, {paddingHorizontal: 24}]}>
               <Text style={styles.categorttext}>{popularity}</Text>
            </View>
            <View style={[styles.categorycontainer, {paddingHorizontal: 24}]}>
               <Image
                  source={STAR_LOGO}
                  resizeMode="contain"
                  style={{width: 15, height: 15, marginRight: 5}}
               />
               <Text style={styles.categorttext}>{rating}</Text>
            </View>
         </View>

         {!isCheckingMovieState && (
            <WatchlistButton
               changeTheme={changeTheme}
               isOnwishlist={isMovieOnWishlist}
               addingTowishlist={isAddingMovieToWishlist}
               handleBtnPress={() => {
                  if (isMovieOnWishlist) {
                     addTowishlist(false);
                  } else {
                     addTowishlist(true);
                  }
               }}
            />
         )}
      </React.Fragment>
   );
};

export default React.memo(MoviePreferenceSection);
