import { useCallback, useState } from "react";
import {
  FlatList,
  Header,
  ImageCarousel,
  Product,
  ProductList,
  React,
  View,
  products,
  styles,
  useMemo,
} from "./import";
import categoriesData from "../../../assets/data/categories";
import CategoriesList from "../../components/Categories/CategoriesList";
import { Category } from "../../types/types";

const ProductScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProducts = useMemo(() => {
    return selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category.$oid === selectedCategory
        );
  }, [selectedCategory]);

  const handleCategoryPress = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: Product }) => <ProductList products={item} />,
    [filteredProducts]
  );

  const renderCategoriesList = useCallback(
    ({ item }: { item: Category }) => (
      <CategoriesList
        categories={item}
        handleCategoryPress={handleCategoryPress}
        selectedCategory={selectedCategory}
      />
    ),
    [handleCategoryPress, selectedCategory]
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <ImageCarousel />
        <FlatList
          data={[
            { _id: { $oid: "All" }, name: "All", __v: 0 },
            ...categoriesData,
          ]}
          keyExtractor={(category) => category._id.$oid.toString()}
          renderItem={renderCategoriesList}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item._id.$oid}
          numColumns={2}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </View>
  );
};

export default ProductScreen;
