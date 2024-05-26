import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { Product } from "../types/types"; // Adjust the path to your Product type

export type ProductStackParamList = {
  Product: undefined;
  Search: undefined;
  Details: { product: Product }; // Include product parameter in Details route
};

export type HomeStackNavigatorProps = {
  navigation: StackNavigationProp<ProductStackParamList>;
  route: RouteProp<ProductStackParamList, keyof ProductStackParamList>;
};

export type ProductNavigationProp = NativeStackNavigationProp<
  ProductStackParamList,
  "Product" | "Search" | "Details"
>;

export type DetailRouteProps = RouteProp<ProductStackParamList, "Details">;

export type ProductRouteProp<RouteName extends keyof ProductStackParamList> =
  RouteProp<ProductStackParamList, RouteName>;
