import { createStackNavigator } from "@react-navigation/stack";
import ProductScreen from "../screens/Product/ProductScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import ProductDetailsScreen from "../screens/Product/Details/ProductDetailsScreen";
import BottomNavigator from "./BottomNavigator";

const Stack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Product"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Product" component={BottomNavigator} />
      <Stack.Screen name="Details" component={ProductDetailsScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;
