import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
   container: {
      width: width * 0.5,
      marginBottom: 10,
   },
   imagebackground: {
      width: '100%',
      height: 150,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      overflow: 'hidden',
   },
   text: {
      color: '#fff',
   },
   playBtnStyle: {
      width: 45,
      height: 45,
      tintColor: 'skyblue',
   },
});

export default styles;
