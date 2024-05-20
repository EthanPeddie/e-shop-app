import React, { memo } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import colors from "../../config/colors";
import { ProductNavigationProp } from "../../types/NavigationTypes";

const Header = () => {
  const navigation = useNavigation<ProductNavigationProp>();

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>E-SHOP</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Search")}
        style={styles.searchButton}
      >
        <IconButton icon="magnify" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    marginBottom: 10,
    paddingVertical: 5,
  },
  headerText: {
    fontSize: 30,
    color: colors.black,
    fontWeight: "bold",
  },
  searchButton: {
    backgroundColor: colors.white,
    borderWidth: 0.4,
    borderRadius: 50,
  },
});

export default memo(Header);
