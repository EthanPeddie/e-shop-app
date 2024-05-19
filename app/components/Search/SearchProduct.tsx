import { View, Text, StyleSheet } from "react-native";
import React, { memo } from "react";
import { Avatar } from "react-native-paper";

import { Product } from "../../types/types";
import colors from "../../config/colors";

interface Props {
  products: Product;
}

const SearchProduct = ({ products }: Props) => {
  return (
    <View style={styles.container}>
      <Avatar.Image
        size={50}
        source={{
          uri: products.image
            ? products.image
            : "https://odoo-community.org/web/image/product.template/3936/image_1024?unique=7f851f0",
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{products.name}</Text>
        <Text style={styles.productDescription} numberOfLines={1}>
          {products.description}
        </Text>
      </View>
    </View>
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
