
import { carouselDummyData } from "../../../../../data";
import React from 'react';
import { View,FlatList } from 'react-native';
// import SectionHeader from "./SectionHeader"
// import ListItemSeperator from "./ListItemSeperator"
import { CategoryHeader, ListItemSeperator, MovieCard } from '~components';
import { Movie } from "~movies/types";

interface Iprops{
    popularmovies:{
        data:Movie[],
        isLoading:boolean,
        isSuccess:boolean
    }
}

const PopularMovie: React.FC =()=> {
    

    return (<>
        {<View>
            <CategoryHeader title="Popular"/>
            <FlatList
                data={carouselDummyData}
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