import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import styles from './styles';
import {ErrorInfoModal, ScreenWrapper} from '~components';
import { COLORS } from '~styles';
import { fetchWishlistMovies, MovieStatusType, toggleWishlist} from '~movies/api';
import { Movie, RequestStatus } from '~movies/types';
import DetailsHeader from '../_partials/DetailsHeader';
import { EMPTY_WISHLIST_ICON, MOVIE_PAGINATION_LIMIT } from '~movies/constants';
import WishlistItem from '../_partials/WishlistItem';

type WishlistResponseType = {
  movies: Movie[],
  total_pages:number
}

const MovieWishlist: React.FC = () => {

  const [loadingWishlist, setLoadingWishlist] = useState(false);
  const [isFetchingNextPage, setFetchingNextPage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [showErrorModalMessage, setShowErrorModalMessage] = useState("");

  const [wishlistMovies, setWishlistMovies] = useState<Movie[]>([]);

  const onfetchWishlist = (type:RequestStatus,  response:WishlistResponseType, error:Error|null)=>{
    setLoadingWishlist(false)
    setFetchingNextPage(false)
      if(type == "success" && response){
        setHasNextPage(currentPage < response.total_pages);
        if (currentPage == 1){setWishlistMovies(response.movies)
        } else {
          setWishlistMovies((prev)=>([...prev, ...response.movies]))
        }
      }else {
        setShowErrorModalMessage(error?.message!);
      }
  }


  const handleAddtoWishlist  = useCallback((id:number)=> (status:boolean) => {
    toggleWishlist(id, status, (type:RequestStatus,  response:MovieStatusType, error:Error|null)=>{
        if(type == "success" && response){
          setCurrentPage(1)
          fetchWishlistMovies(1,onfetchWishlist)  
        }else {
            setShowErrorModalMessage(error?.message!)
        }
    })
},[])


  useEffect(()=>{
    setLoadingWishlist(true)
    fetchWishlistMovies(1,onfetchWishlist)
  },[])

  const onLoadMore = () => {
      if (hasNextPage && !loadingWishlist && wishlistMovies?.length >= MOVIE_PAGINATION_LIMIT) {
          setCurrentPage((prev)=> prev + 1)
          setFetchingNextPage(true);
          fetchWishlistMovies(currentPage+1,onfetchWishlist)
      }
  }


  return (
    <ScreenWrapper containerStyle={{backgroundColor:"#080C28"}} hideStatusBar={true}>

        <DetailsHeader 
            containerStyle={styles.containerStyle} 
            hasTitle 
            title='Wishlist ❤️'
            titleStyle={{fontWeight:"700",fontSize:18}}
        />

        <FlatList
            data={wishlistMovies ?? []}
            keyExtractor={data=>data.id.toString()}
            renderItem={({item,index})=>{
              return (
                <WishlistItem 
                  index={index} 
                  item={item}
                  handleRemoveFomWishlist={handleAddtoWishlist(item?.id)}
                />
              )
            }}
            contentContainerStyle={[styles.listContentContainer,!!wishlistMovies?.length && {flex:0}]}
            style={styles.listContainer}
            onEndReached={onLoadMore}
            onEndReachedThreshold={0}
            ListFooterComponent={() =>
                isFetchingNextPage ? (
                    <View style={styles.listFooterLoadingNextPageContainer}>
                        <ActivityIndicator color={COLORS.SKYBLUE} size={"large"}/>
                        <Text style={styles.listFooterLoadingNextPageText}>
                            {`Loading more movies...`}
                        </Text>
                    </View>
                ) : (
                    <></>
                )
            }
            ListEmptyComponent={() => (
              <View style={styles.emptyView}>
                  {
                    !!loadingWishlist ?
                        <ActivityIndicator color={COLORS.SKYBLUE} size={60} /> :
                        <Image source={EMPTY_WISHLIST_ICON} style={{width:60,height:60}} />
                  }
                  <Text style={styles.emptyViewTitle}>
                      {loadingWishlist ? "Loading movies..." :  "You have no movies yet"}
                  </Text>
                  <Text style={styles.emptyViewBody}>
                      {(loadingWishlist) ? "Please wait while your movies are loaded": "You have no movies on your wishlist"}         
                  </Text>
              </View>
            )}
        />

        <ErrorInfoModal 
            isModalVisible={!!showErrorModalMessage}
            handleModalDismiss={()=>{setShowErrorModalMessage("")}}
            desc={showErrorModalMessage}
        />

    </ScreenWrapper>
  );
};

export default MovieWishlist;
