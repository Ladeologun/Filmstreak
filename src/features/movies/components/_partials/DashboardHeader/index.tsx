import React from 'react';
import { Image, View, Text } from 'react-native';
import styles from './styles';
import { COLORS } from '~styles';

interface Iprops{
    title:string
}

const DashboardHeader: React.FC<Iprops> =({title}) =>{

    return (
        <View style={styles.container}>
            <View style={styles.textcontainer}>
                <Text style={[styles.text,{color:COLORS.SKYBLUE}]}>{title}</Text>
            </View>
        </View>
    );
}


export default DashboardHeader;