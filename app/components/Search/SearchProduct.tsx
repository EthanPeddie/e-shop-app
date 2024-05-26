import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { memo, useCallback } from "react";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { Product } from "../../types/types";
import colors from "../../config/colors";
import route from "../../navigations/route";
import { ProductNavigationProp } from "../../types/NavigationTypes";

interface Props {
  products: Product;
}

const SearchProduct = ({ products }: Props) => {
  const navigation = useNavigation<ProductNavigationProp>();

  const handleDetailPress = useCallback(() => {
    navigation.navigate(route.DETAILS, { product: products });
  }, [navigation, products]);
  return (
    <TouchableOpacity style={styles.container} onPress={handleDetailPress}>
      <Avatar.Image
        size={50}
        source={{
          uri: products.image ? products.image : "https://shorturl.at/pe3O2",
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{products.name}</Text>
        <Text style={styles.productDescription} numberOfLines={1}>
          {products.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
  },
  productName: {
    color: colors.black,
    fontSize: 20,
    fontWeight: "400",
  },
  productDescription: {
    color: colors.black,
  },
});

export default memo(SearchProduct);
