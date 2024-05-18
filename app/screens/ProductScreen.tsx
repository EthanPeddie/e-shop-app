import React, { useMemo } from "react";
import { FlatList } from "react-native";
import products from "../../assets/data/products";
import ProductList from "../components/Products/ProductList";
import { Product } from "../types/types";

const ProductScreen = () => {
  const renderItem = useMemo(
    () =>
      ({ item }: { item: Product }) =>
        <ProductList products={item} />,
    []
  );

  return (
    <FlatList
      data={products as Product[]}
      keyExtractor={(item) => item._id.$oid}
      numColumns={2}
      horizontal={false}
      renderItem={renderItem}
    />
  );
};

export default ProductScreen;
