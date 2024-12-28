import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import styles from './styles';
import {ScreenWrapper} from '~components';
import { COLORS } from '~styles';
import { fetchWishlistMovies} from '~movies/api';
import { Movie, RequestStatus } from '~movies/types';
import DetailsHeader from '../_partials/DetailsHeader';
import { EMPTY_WISHLIST_ICON } from '~movies/constants';
import WishlistItem from '../_partials/WishlistItem';

const MovieWishlist: React.FC = () => {

  const [loadingWishlist, setLoadingWishlist] = useState(false);
  const [isFetchingNextPage, setFetchingNextPage] = useState(false);
  const [showErrorModalMessage, setShowErrorModalMessage] = useState("");

  const [wishlistMovies, setWishlistMovies] = useState<Movie[]>([])
  const onfetchWishlist = (type:RequestStatus,  response:Movie[], error:Error|null)=>{
    setLoadingWishlist(false)
      if(type == "success" && response){
        setWishlistMovies(response)
      }else {
          setShowErrorModalMessage(error?.message!)
      }
  }


  useEffect(()=>{
    fetchWishlistMovies(1,onfetchWishlist)
  },[])

  const onLoadMore = () => {
    // if (hasNextPage && !isFetching && customers?.length >= CUSTOMER_PAGINATION_LIMIT && !isRefetching) {
    //     fetchNextPage();
    // }
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
              return (<WishlistItem index={index} item={item}/>)
            }}
            contentContainerStyle={[styles.listContentContainer,!!wishlistMovies?.length && {flex:0}]}
            style={styles.listContainer}
            onEndReached={onLoadMore}
            onEndReachedThreshold={0}
            ListFooterComponent={() =>
                isFetchingNextPage ? (
                    <View style={styles.listFooterLoadingNextPageContainer}>
                        <ActivityIndicator color={COLORS.SKYBLUE} />
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

    </ScreenWrapper>
  );
};

export default MovieWishlist;
