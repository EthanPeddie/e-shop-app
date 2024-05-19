import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

type ProductStackParamList = {
  Product: undefined;
  Search: undefined;
};

export type ProductNavigationProp = NativeStackNavigationProp<
  ProductStackParamList,
  "Search"
>;
