import { StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import colors from "./app/config/colors";
import BottomNavigator from "./app/navigations/BottomNavigator";
import HomeStackNavigator from "./app/navigations/HomeStackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <HomeStackNavigator />
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
