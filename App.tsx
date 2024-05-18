import { StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import ProductScreen from "./app/screens/ProductScreen";
import colors from "./app/config/colors";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <ProductScreen />
      </SafeAreaView>
    </PaperProvider>
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
