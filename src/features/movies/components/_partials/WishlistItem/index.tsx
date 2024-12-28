import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { DELETE_ICON, STAR_LOGO } from "~movies/constants";
import { Movie } from "~movies/types";
import { LimitTextComponent } from "~components";

interface Iprops {
    item:Movie;
    index:number;
    handleRemoveFomWishlist:(status:boolean)=>void
}

const WishlistItem:React.FC<Iprops> = ({
   item,
   index,
   handleRemoveFomWishlist
}) => {

    let isAtevenIndex = index % 2 == 0;
   
    return (
        <View style={[styles.wishlistItemCard, isAtevenIndex && {backgroundColor:"#080C28"}]}>
            <View style={{flexDirection:"row"}}>
                <View style={{borderRadius:8,marginRight:15}}>
                    <Image 
                        source={{uri: item.poster}}
                        style={{height:100,width:100,borderRadius:8}} 
                        resizeMode="cover"
                    />
                </View>
                <View style={{justifyContent:"center"}}>
                    <LimitTextComponent
                        text={item.title}
                        limit={25}
                        textStyle={styles.titleStyle} 
                    />
                    <Text style={styles.releaseYearStyle}>Release Year 2012</Text>
                    <View style={styles.votesandpopularity}>
                        <View style={[styles.categorycontainer,{paddingHorizontal:0,marginLeft:0}]}>
                            <Text style={styles.categorttext}>{`❤️ ${item.popularity}`}</Text>
                        </View>
                        <View style={[styles.categorycontainer,{paddingHorizontal:2}]}>
                            <Image source={STAR_LOGO} resizeMode="contain" style={{width:15,height:15,marginRight:5}}/>
                            <Text style={styles.categorttext}>{item.rating}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity
                onPress={()=>{handleRemoveFomWishlist(false)}}
            >
                <Image source={DELETE_ICON}  style={{width:20,height:20,marginRight:5}}/>
            </TouchableOpacity>
        </View>
    )

}

export default WishlistItem;