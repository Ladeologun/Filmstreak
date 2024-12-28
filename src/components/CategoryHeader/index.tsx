import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { NavigationTypes } from '~movies/types';
import { ROUTES } from '~navigation/routes';


interface Iprops{title:string; showRightCTA?:boolean}

const CategoryHeader: React.FC<Iprops>=({title, showRightCTA=false})=>{
    const navigation = useNavigation<NavigationTypes>()
   
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            {!!showRightCTA &&
            <TouchableOpacity onPress={() => {
                navigation.navigate(ROUTES.MOVIE_WISHLISTS)
            }}>
                <Text style={styles.favouriteListText}>Wishlist</Text>
            </TouchableOpacity>}
            
        </View>
    );
}

export default CategoryHeader;