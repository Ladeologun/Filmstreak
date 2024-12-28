import React, { useEffect, useRef } from 'react';
import { View, FlatList, Animated, Dimensions } from 'react-native';
import TrendingMovieCard from '../../../components/_partials/TrendingMovieCard';
import { COLORS } from '~styles';
import styles from './styles';
import { Movie } from '~movies/types';

interface Iprops{
    movies:Movie[]
}


const { width } = Dimensions.get("screen");
const TrendingMoviesCarousel: React.FC<Iprops> =({movies})=> {

    const slideListRef = useRef<FlatList<Movie>>(null);
    const scrollX = useRef(new Animated.Value(0))?.current;
    let position = Animated.divide(scrollX, width);


    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
          index = (index + 1) % movies.length;
          slideListRef.current?.scrollToOffset({
            offset: index * width,
            animated: true,
          });
        }, 5000);

        return () => clearInterval(interval); 
    }, [movies]);

    
    return (
        <View>
            <FlatList
                ref={slideListRef} 
                data={movies}
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

            <View style={styles.positionIndicatorWrapper}>
                <View style={styles.dotView}>
                    {movies.map((_a:any, i:number) => {
                        let opacity = position?.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={i}
                                style={{ opacity, height: 4, width: 24, backgroundColor: COLORS.SKYBLUE, margin: 2, borderRadius: 5 }}
                            />
                        )
                    })}
                </View>
            </View>
        </View>
    );
}


export default TrendingMoviesCarousel;