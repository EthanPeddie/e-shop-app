import React, { memo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Icon } from "react-native-paper";
import colors from "../../config/colors";
import { Product } from "../../types/types";

interface ProductProps {
  products: Product;
}

const windowWidth = Dimensions.get("window").width;

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

const styles = StyleSheet.create({
  productContainer: {
    width: windowWidth / 2 - 20,
    backgroundColor: colors.white,
    marginVertical: 10,
    borderRadius: 10,
    marginRight: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
  imageContainer: {
    backgroundColor: colors.smoke,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
  },
  nameRatingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  productName: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 16,
  },
  priceAddContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.black,
  },
  addButton: {
    backgroundColor: colors.green,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: colors.white,
    textAlign: "center",
  },
});

export default memo(ProductList);
