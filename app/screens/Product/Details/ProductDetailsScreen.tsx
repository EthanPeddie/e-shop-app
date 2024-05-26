import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Icon } from "react-native-paper";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";

import colors from "../../../config/colors";
import styles from "./styles";
import { DetailRouteProps } from "../../../types/NavigationTypes";
import { Product } from "../import";

const ProductDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<DetailRouteProps>();
  const { product }: { product: Product } = route.params;

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={{ color: colors.danger }}>Product not found!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.appbarIcon}
        >
          <Icon source="arrow-left" size={23} color={colors.black} />
        </TouchableOpacity>
        <View style={styles.appbarRight}>
          <TouchableOpacity style={styles.appbarIcon}>
            <Icon source="heart" size={23} color={colors.danger} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.appbarIcon}>
            <Icon source="cart" size={23} color={colors.black} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        <Image
          source={{
            uri: product.image ? product.image : "https://shorturl.at/pe3O2",
          }}
          style={styles.image}
          contentFit="fill"
        />
        <View style={styles.productInfoContainer}>
          <Text style={styles.productName}>{product.name}</Text>
          <View style={styles.ratingContainer}>
            {product?.rating && (
              <View style={styles.rating}>
                <Icon source="star" size={20} color={colors.star} />
                <Text style={styles.ratingText}>{product?.rating}</Text>
              </View>
            )}
            <View style={styles.rating}>
              <Icon source="thumb-up" size={20} color={colors.green} />
              <Text style={styles.ratingText}>{product.numReviews}</Text>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text numberOfLines={5} style={styles.descriptionText}>
              {product.description}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$ {product.price}</Text>
        </View>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;
