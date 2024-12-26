
import React from 'react';
import { View,FlatList } from 'react-native';
import { CategoryHeader, ListItemSeperator, MovieCard } from '~components';
import { Movie } from "~movies/types";

interface Iprops{
    movies:Movie[]
}

const PopularMovie: React.FC<Iprops> =({movies})=> {
    
    return (<>
        {<View>
            <CategoryHeader title="Popular"/>
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


export default PopularMovie;