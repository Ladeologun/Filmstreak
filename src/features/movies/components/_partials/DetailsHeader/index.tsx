import {Image, Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import styles, { BackButton } from './styles';
import {LEFT_ARROW, WISHLIST_ICON} from '~movies/constants';
import {useNavigation} from '@react-navigation/native';
import {Walkthrough} from '~components';
import {useEffect, useRef} from 'react';
import {COLORS} from '~styles';
import {WalkthroughHandle} from '~components';
import {ROUTES} from '~navigation/routes';
import {NavigationTypes} from '~movies/types';

interface Iprops {
   containerStyle?: ViewStyle;
   hasTitle?: boolean;
   title?: string;
   titleStyle?: TextStyle;
   hasRightCTA?: boolean;
   showWalkthrough?: boolean;
   handleWalkthroughClose?: () => void;
}

const DetailsHeader: React.FC<Iprops> = ({
   containerStyle,
   hasRightCTA,
   hasTitle,
   titleStyle,
   title,
   showWalkthrough,
   handleWalkthroughClose,
}) => {
   const navigation = useNavigation<NavigationTypes>();
   const wishlistWalkthroughRef = useRef<WalkthroughHandle | null>(null);

   useEffect(() => {
      if (hasRightCTA && showWalkthrough) {
         wishlistWalkthroughRef?.current?.open();
      }
   }, [hasRightCTA, showWalkthrough]);

   return (
      <View style={[styles.barcontainer, containerStyle]}>
         <BackButton
            style={styles.backarrow}
            onPress={() => {
               navigation.goBack();
            }}
         >
            <Image source={LEFT_ARROW} style={styles.leftIconStyle} />
         </BackButton>

         {!!hasTitle && <Text style={[{color: COLORS.WHITE}, titleStyle]}>{title}</Text>}

         {!!hasRightCTA ? (
            <Walkthrough
               ref={wishlistWalkthroughRef}
               onNext={() => {
                  wishlistWalkthroughRef?.current?.close();
                  handleWalkthroughClose?.();
               }}
               hidePrevious
               contentTitle="Wishlist"
               nextBtnText="Done"
               contentDesc="Click this icon to view movies in your wishlist"
               contentContainerStyle={{alignSelf: 'flex-end', marginRight: 15}}
               triangleStyle={{right: 14}}
               backgroundColor={COLORS.PRIMARY}
            >
               <TouchableOpacity
                  style={styles.backarrow}
                  onPress={() => {
                     navigation.navigate(ROUTES.MOVIE_WISHLISTS);
                  }}
               >
                  <Image source={WISHLIST_ICON} style={{width: 25, height: 25}} />
               </TouchableOpacity>
            </Walkthrough>
         ) : (
            <View />
         )}
      </View>
   );
};

export default DetailsHeader;
