import React from 'react';
import { Image, View, Text } from 'react-native';
import styles from './styles';
import { COLORS } from '~styles';

interface Iprops{
    title:string;
    isLoading?:boolean
}

const DashboardHeader: React.FC<Iprops> =({title,isLoading}) =>{

    return (
        <View style={styles.container}>
            <View style={styles.textcontainer}>
                <Text style={[styles.text,{color:COLORS.SKYBLUE}, isLoading && {opacity:0.3}]}>{title}</Text>
            </View>
        </View>
    );
}


export default DashboardHeader;