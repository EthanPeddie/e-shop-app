import React, { memo, useCallback } from "react";
import { Image } from "expo-image";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import colors from "../../config/colors";
import { Product } from "../../types/types";
import { styles } from "./ProductListStyle";
import { ProductNavigationProp } from "../../types/NavigationTypes";
import route from "../../navigations/route";
interface ProductProps {
  products: Product;
}

const ProductList = ({ products }: ProductProps) => {
  const navigation = useNavigation<ProductNavigationProp>();

  const handleDetailPress = useCallback(() => {
    navigation.navigate(route.DETAILS, { product: products });
  }, [products, navigation]);
  return (
    <View style={styles.productContainer}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={handleDetailPress}
      >
        <Image
          contentFit="fill"
          source={{
            uri: products.image ? products.image : "https://shorturl.at/pe3O2",
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.nameRatingContainer}>
        <Text style={styles.productName} numberOfLines={1}>
          {products.name}
        </Text>
        <View style={styles.ratingContainer}>
          <Icon source="star" color={colors.star} size={18} />
          <Text style={styles.rating}>
            {products.rating ? products.rating : 0}
          </Text>
        </View>
      </View>
      <View style={styles.priceAddContainer}>
        <Text style={styles.price}>${products.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(ProductList);
