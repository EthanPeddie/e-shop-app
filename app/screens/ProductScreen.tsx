import React, { useMemo } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import products from "../../assets/data/products";
import ProductList from "../components/Products/ProductList";
import { Product } from "../types/types";
import Header from "../components/Header/Header";
import colors from "../config/colors";

const ProductScreen = () => {
  const renderItem = useMemo(
    () =>
      ({ item }: { item: Product }) =>
        <ProductList products={item} />,
    []
  );

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={products}
        keyExtractor={(item) => item._id.$oid}
        numColumns={2}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
});

export default ProductScreen;
