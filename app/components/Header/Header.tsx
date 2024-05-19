import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";

import colors from "../../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { ProductNavigationProp } from "../../types/NavigationTypes";

const Header = () => {
  const navigation = useNavigation<ProductNavigationProp>();

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>E-Shop</Text>
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
    padding: 5,
  },
  headerText: {
    fontSize: 30,
    color: colors.green,
    fontWeight: "bold",
  },
  searchButton: {},
});

export default memo(Header);
