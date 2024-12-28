import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ROUTES } from "./routes";
import MoviesDashboard from "~movies/components/MoviesDashboard";
import MovieDetailsScreen from "~movies/components/MovieDetails";
import MovieWishlist from "~movies/components/MovieWishlist";

const Stack = createNativeStackNavigator();

const StackNavigator = ()=>(

  <Stack.Navigator>
    <Stack.Screen name={ROUTES.MOVIES_DASHBOARD} component={MoviesDashboard} options={{headerShown:false}}/>
    <Stack.Screen name={ROUTES.MOVIE_DETAILS} component={MovieDetailsScreen} options={{headerShown:false}}/>
    <Stack.Screen name={ROUTES.MOVIE_WISHLISTS} component={MovieWishlist} options={{headerShown:false}}/>
  </Stack.Navigator>
)

export default StackNavigator;