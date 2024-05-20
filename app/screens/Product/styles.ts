import { StyleSheet } from "react-native";

import colors from "../../config/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    alignItems: "center",
    paddingHorizontal: 10,
    flex: 1,
  },
  flatListContent: {
    alignItems: "center",
  },
});
