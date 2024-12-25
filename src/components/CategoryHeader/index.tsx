import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';


interface Iprops{title:string}

const CategoryHeader: React.FC<Iprops>=({title})=>{
   
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            {title =="Popular" &&
            <TouchableOpacity onPress={() => {}}>
                <Text style={styles.favouriteListText}>My List</Text>
            </TouchableOpacity>}
            
        </View>
    );
}

export default CategoryHeader;