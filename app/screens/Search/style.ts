import { StyleSheet } from "react-native";

import colors from "../../config/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.white,
    flex: 1,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.2,
    marginBottom: 10,
  },
  backButton: {
    width: 40,
    marginRight: 10,
  },
  searchBar: {
    marginBottom: 10,
    backgroundColor: colors.gray,
    flex: 1,
  },
  loader: {
    marginTop: 20,
  },
});
