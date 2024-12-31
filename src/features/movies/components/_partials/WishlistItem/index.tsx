import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {DELETE_ICON, STAR_LOGO} from '~movies/constants';
import {Movie} from '~movies/types';
import {LimitTextComponent} from '~components';
import {COLORS} from '~styles';
import { getYear } from '~movies/utils';

interface Iprops {
   item: Movie;
   index: number;
   handleRemoveFomWishlist: (status: boolean) => void;
}

const WishlistItem: React.FC<Iprops> = ({item, index, handleRemoveFomWishlist}) => {
   let isAtevenIndex = index % 2 == 0;

   return (
      <View style={[styles.wishlistItemCard, isAtevenIndex && {backgroundColor: COLORS.SECONDARY}]}>
         <View style={{flexDirection: 'row'}}>
            <View style={styles.imageContainer}>
               <Image source={{uri: item.poster}} style={styles.imageStyle} resizeMode="cover" />
            </View>
            <View style={{justifyContent: 'center'}}>
               <LimitTextComponent text={item.title} limit={25} textStyle={styles.titleStyle} />
               <Text style={styles.releaseYearStyle}>{`Released ${getYear(item.date)}`}</Text>
               <View style={styles.votesandpopularity}>
                  <View style={[styles.categorycontainer, {paddingHorizontal: 0, marginLeft: 0}]}>
                     <Text style={styles.categorttext}>{`❤️ ${item.popularity}`}</Text>
                  </View>
                  <View style={[styles.categorycontainer, {paddingHorizontal: 2}]}>
                     <Image source={STAR_LOGO} resizeMode="contain" style={styles.starIconStyle} />
                     <Text style={styles.categorttext}>{item.rating}</Text>
                  </View>
               </View>
            </View>
         </View>
         <TouchableOpacity
            onPress={() => {
               handleRemoveFomWishlist(false);
            }}
         >
            <Image source={DELETE_ICON} style={styles.deleteIconStyle} />
         </TouchableOpacity>
      </View>
   );
};

export default WishlistItem;
