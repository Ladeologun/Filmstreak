import {Image, ImageBackground, Text, View} from 'react-native';
import styles from './styles';
import DetailsHeader from '../DetailsHeader';
import React from 'react';

interface Iprops {
  poster: string;
  title: string;
  showWatchlistWalkthrough: boolean;
  handleWalkthroughClose: () => void;
}

const MovieDetailsHeaderSection: React.FC<Iprops> = ({
  poster,
  showWatchlistWalkthrough,
  title,
  
  handleWalkthroughClose,
}) => {
  return (
    <ImageBackground
      source={{uri: poster}}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={{flex: 1}}>
        <DetailsHeader
          containerStyle={{marginTop:4}} 
          hasRightCTA={true}
          showWalkthrough={showWatchlistWalkthrough}
          handleWalkthroughClose={handleWalkthroughClose}
        />

        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default React.memo(MovieDetailsHeaderSection);
