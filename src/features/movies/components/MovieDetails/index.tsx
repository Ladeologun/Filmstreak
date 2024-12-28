import React, { useCallback, useEffect, useState } from 'react';
import { View,Text,ScrollView} from 'react-native';
import styles from './styles';
import MovieDetailsHeaderSection from '../_partials/MovieDetailsHeaderSection';
import MoviePreferenceSection from '../_partials/MoviePreferenceSection';
import { Movie } from '~movies/types';
import { useRoute } from '@react-navigation/native';
import { toggleWishlist, checkMovieAccountState, MovieStatusType } from '~movies/api';
import { ErrorInfoModal, ScreenWrapper } from '~components';


type RouteParams = {movie: Movie}
type RequestStatus = "success"|"error";

const MovieDetailsScreen:React.FC = () => {

    const route  = useRoute()
    const {movie} = route?.params as RouteParams ?? {};
    const [addingMovieTowishlist, setAddingMovieTowishlist] = useState(false);
    const [checkingMovieState, setCheckingMovieState] = useState(false);
    const [isMovieOnWishlist, setMovieOnWishlist] = useState(false);
    const [showWatchlistWalkthrough, setShowWatchlistWalkthrough] = useState(false);
    const [showErrorModalMessage, setShowErrorModalMessage] = useState("");

    const handleAddtoWishlist  = useCallback((status:boolean) => {
        toggleWishlist(movie?.id, status, (type:RequestStatus,  response:MovieStatusType, error:Error|null)=>{
            setAddingMovieTowishlist(false)
            if(type == "success" && response){
                handleCheckMovieState();
                if(status){setShowWatchlistWalkthrough(true);}
            }else {
                setShowErrorModalMessage(error?.message!)
            }

        })
    },[movie?.id])

    const handleCheckMovieState  = () => {
        checkMovieAccountState(movie?.id, (type:RequestStatus, response:MovieStatusType, error:Error|null)=>{
            setCheckingMovieState(false)
            if( type=="success" && response){
                setMovieOnWishlist(response.watchlist);
            }else {
                setShowErrorModalMessage(error?.message!)
            }
        })
    }

    const onWalkthroughClose = useCallback(()=>{
        setShowWatchlistWalkthrough(false)
    },[])

    useEffect(()=>{
        setCheckingMovieState(true)
        handleCheckMovieState();
    },[movie?.id])


    return (
        <ScreenWrapper  hideStatusBar={true}>
        <ScrollView contentContainerStyle={styles.contentcontainer} style={styles.container}>
            <MovieDetailsHeaderSection 
                poster={movie?.poster} 
                title= {movie?.title}
                showWatchlistWalkthrough= {showWatchlistWalkthrough}
                handleWalkthroughClose = {onWalkthroughClose} 
            />

            <MoviePreferenceSection 
                language={movie?.language} 
                popularity={movie?.popularity} 
                rating={movie?.rating} 
                id={movie.id}
                addTowishlist={handleAddtoWishlist}
                isAddingMovieToWishlist = {addingMovieTowishlist}
                isMovieOnWishlist= {isMovieOnWishlist}
                isCheckingMovieState = {checkingMovieState}
            />
            <View style={styles.overviewcon}>
                <Text style={styles.textoverview}>Overview</Text>
                <Text numberOfLines={5} style={styles.textdetails}>{movie?.overview}</Text>
            </View>

            <ErrorInfoModal 
                isModalVisible={!!showErrorModalMessage}
                handleModalDismiss={()=>{setShowErrorModalMessage("")}}
                desc={showErrorModalMessage}
            />

        </ScrollView>
        </ScreenWrapper>
    );
}

export default MovieDetailsScreen;