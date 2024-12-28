import { ActivityIndicator, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { STAR_LOGO } from "~movies/constants";
import { COLORS } from "~styles";
import { Movie } from "~movies/types";

interface Iprops {
    item:Movie
    index:number
}

const WishlistItem:React.FC<Iprops> = ({
   item,
   index
}) => {

    let isAtevenIndex = index % 2 == 0;
    return (
        <View style={[styles.wishlistItemCard, isAtevenIndex && {backgroundColor:"#080C28"}]}>
            <View style={{borderRadius:8,marginRight:15}}>
                <Image 
                    source={{uri: item.poster}}
                    style={{height:100,width:100,borderRadius:8}} 
                    resizeMode="cover"
                />
            </View>
            <View style={{justifyContent:"center"}}>
                <Text style={styles.titleStyle}>{item.title}</Text>
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
    )

}

export default WishlistItem;