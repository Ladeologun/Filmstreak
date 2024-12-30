import {ActivityIndicator, Image, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import styles from './styles';
import {ADD_ICON, LOVE} from '~movies/constants';
import {COLORS} from '~styles';

interface Iprops {
   isOnwishlist: boolean;
   addingTowishlist: boolean;
   btnStyle?: ViewStyle;
   handleBtnPress: () => void;
   changeTheme?:boolean
}

const WatchlistButton: React.FC<Iprops> = ({
   isOnwishlist,
   addingTowishlist,
   handleBtnPress,
   btnStyle,
   changeTheme
}) => {
   let message = isOnwishlist ? 'Saved to wishlist' : 'Add to wishlist';
   return (
      <TouchableOpacity onPress={handleBtnPress} disabled={addingTowishlist}>
         <View style={[styles.wishlistBtn, isOnwishlist && {backgroundColor: changeTheme? "green":'red'}, btnStyle]}>
            {!!addingTowishlist ? (
               <ActivityIndicator size={'small'} color={COLORS.WHITE} style={{marginRight: 10}} />
            ) : !isOnwishlist ? (
               <Image source={ADD_ICON} style={styles.imageStyle} />
            ) : (
               <Image source={LOVE} style={styles.imageStyle} />
            )}
            <Text style={styles.wishListTextStyle}>{message}</Text>
         </View>
      </TouchableOpacity>
   );
};

export default WatchlistButton;
