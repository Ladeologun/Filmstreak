import {StyleSheet} from 'react-native';
import {COLORS, Fonts} from '~styles';

const styles = StyleSheet.create({
   contentContainerStyle: {
      paddingHorizontal: 10,
      justifyContent: 'center',
      flex: 0,
   },
   wishlistItemCard: {
      padding: 10,
      opacity: 0.8,
      backgroundColor: COLORS.SECONDARY_SUBTHEME,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
   },
   votesandpopularity: {
      flexDirection: 'row',
      marginTop: 8,
      alignItems: 'center'
   },
   categorycontainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 9,
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 8,
   },
   categorttext: {
      color: '#fff',
      fontSize: 14,
      fontFamily: Fonts.RalewayBold,
      lineHeight: 22,
   },
   wishListTextStyle: {
      color: COLORS.WHITE,
      fontSize: 16,
      fontWeight: '600',
   },
  
   titleStyle: {
      fontSize: 19,
      fontWeight: '500',
      fontFamily: Fonts.CreepsterRegular,
      textTransform:"uppercase",
      color: COLORS.WHITE,
   },
   releaseYearStyle: {
      color: COLORS.WHITE,
      marginTop: 8,
      fontSize:15,
      fontFamily: Fonts.GupterBold
   },
   containerStyle: {
      marginTop: 0,
      paddingHorizontal: 10,
      marginBottom: 16,
   },
   imageStyle: {
      height: 100, 
      width: 100, 
      borderRadius: 8
   },
   starIconStyle: {
      width: 15, 
      height: 15, 
      marginRight: 5
   },
   deleteIconStyle: {
      width: 20, 
      height: 20, 
      marginRight: 5
   },
   imageContainer: {
      borderRadius: 8, 
      marginRight: 15
   }
});

export default styles;
