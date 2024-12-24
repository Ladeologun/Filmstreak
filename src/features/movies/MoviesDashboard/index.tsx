import React, { PropsWithChildren } from "react";
import { StatusBar, SafeAreaView,Text, View} from "react-native";
import styles from "./styles";
import { ScreenWrapper } from "~components";
import TrendingMoviesCarousel from "./components/TrendingMoviesCarousel";




const MoviesDashboard: React.FC= () => {
    
    return (
        <ScreenWrapper>
            <View style={{}}>
                <TrendingMoviesCarousel />
            </View>
            
        </ScreenWrapper>
    );
};
export default MoviesDashboard;
