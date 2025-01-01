import {StyleSheet, Platform, Dimensions} from 'react-native';
import {COLORS, Fonts} from '~styles';
import styled from 'styled-components/native';

const {height} = Dimensions.get('window');

export const OverviewContainer = styled.View`
   flex: 1;
   padding-horizontal: 12px;
   margin-top: 8px;
   justify-content: center;
`;

export const OverViewText = styled.Text`
   ${() => ({
      fontFamily: Fonts.RalewaySemiBold,
      fontSize: '18px',
      color: COLORS.WHITE,
   })}
`;

const styles = StyleSheet.create({
   contentcontainer: {
      flex: 1,
      backgroundColor: COLORS.PRIMARY,
   },
   container: {
      backgroundColor: COLORS.PRIMARY,
   },
   textdetails: {
      color: COLORS.WHITE,
      fontSize: 18,
      fontFamily: Fonts.RalewayRegular,
      marginTop: 8,
      fontWeight: '100',
   },
});

export default styles;
