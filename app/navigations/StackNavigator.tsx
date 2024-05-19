import { createStackNavigator } from "@react-navigation/stack";
import ProductScreen from "../screens/ProductScreen";
import SearchScreen from "../screens/Search/SearchScreen";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Product"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
