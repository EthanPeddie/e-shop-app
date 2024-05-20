import React, { memo } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-paper";
import colors from "../../config/colors";
import { Product } from "../../types/types";
import { styles } from "./ProductListStyle";

interface ProductProps {
  products: Product;
}

const ProductList = ({ products }: ProductProps) => {
  return (
    <View style={styles.productContainer}>
      <TouchableOpacity style={styles.imageContainer}>
        <Image
          source={{
            uri: products.image
              ? products.image
              : "https://odoo-community.org/web/image/product.template/3936/image_1024?unique=7f851f0",
          }}
          style={styles.image}
          resizeMode="cover"
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
