import { StyleSheet, View } from "react-native";

import ProductScreen from "./app/screens/ProductScreen";
import colors from "./app/config/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <ProductScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
});
