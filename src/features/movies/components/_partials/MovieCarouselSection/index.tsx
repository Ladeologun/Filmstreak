
import React from 'react';
import { View,FlatList } from 'react-native';
import { CategoryHeader, ListItemSeperator, MovieCard } from '~components';
import { Movie } from "~movies/types";

interface Iprops{
    movies:Movie[];
    title?: string;
    showRightCTA?:boolean
}

const MovieCarouselSection: React.FC<Iprops> =({movies, title="Popular", showRightCTA=false})=> {
    
    return (<>
        {<View>
            <CategoryHeader title={title} showRightCTA={showRightCTA}/>
            <FlatList
                data={movies}
                keyExtractor={item => item.id.toString()}
                key={'_'}
                horizontal
                renderItem={({item})=><MovieCard item={item}/>}
                ItemSeparatorComponent={ListItemSeperator}
            />
        </View>}
        </>
    );
}


export default MovieCarouselSection;