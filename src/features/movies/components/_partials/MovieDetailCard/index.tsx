import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import {STAR_LOGO} from '~movies/constants';
import WatchlistButton from '../WatchlistButton/Index';
import {LimitTextComponent} from '~components';

interface Iprops {
   id: number;
   title: string;
   language: string;
   popularity: number;
   rating: number;
   addTowishlist: (status: boolean) => void;
   isAddingMovieToWishlist: boolean;
   isMovieOnWishlist: boolean;
   isCheckingMovieState: boolean;
}

const MovieDetailCard: React.FC<Iprops> = ({
   title,
   popularity,
   rating,
   addTowishlist,
   isAddingMovieToWishlist,
   isMovieOnWishlist,
   isCheckingMovieState,
}) => {
   return (
      <React.Fragment>
         <LimitTextComponent text={title} limit={25} textStyle={styles.title} />
         <View style={styles.votesandpopularity}>
            <View style={[styles.categorycontainer]}>
               <Text style={styles.categorttext}>{popularity}</Text>
            </View>
            <View style={[styles.categorycontainer, {marginLeft: 8}]}>
               <Image source={STAR_LOGO} resizeMode="contain" style={styles.imageStyle} />
               <Text style={styles.categorttext}>{rating}</Text>
            </View>
         </View>

         {!isCheckingMovieState && (
            <WatchlistButton
               isOnwishlist={isMovieOnWishlist}
               btnStyle={styles.btnStyle}
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

export default React.memo(MovieDetailCard);
