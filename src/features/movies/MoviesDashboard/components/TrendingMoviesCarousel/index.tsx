import React, { useEffect, useRef } from 'react';
import { View, FlatList, Animated, Dimensions } from 'react-native';
import styles from './styles';
import { MovieDetailDisplayType, carouselDummyData } from '../../../../../data';
import TrendingMovieCard from '../TrendingMovieCard';



const { width } = Dimensions.get("screen");
const TrendingMoviesCarousel: React.FC =()=> {

    const slideListRef = useRef<FlatList<MovieDetailDisplayType>>(null);
    const scrollX = useRef(new Animated.Value(0))?.current;


    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
          index = (index + 1) % carouselDummyData.length;
          slideListRef.current?.scrollToOffset({
            offset: index * width,
            animated: true,
          });
        }, 5000);
    
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    
    return (
        <View>
            <FlatList
                ref={slideListRef} 
                data={carouselDummyData}
                keyExtractor={data=>data.id.toString()}
                horizontal
                pagingEnabled
                scrollEnabled
                snapToAlignment="center"
                scrollEventThrottle={16}
                decelerationRate={"fast"}
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=><TrendingMovieCard item={item} />}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }], {useNativeDriver: false}
                )}
            />
        </View>
    );
}


export default TrendingMoviesCarousel;