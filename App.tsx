import { StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import colors from "./app/config/colors";
import StackNavigator from "./app/navigations/StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <StackNavigator />
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
