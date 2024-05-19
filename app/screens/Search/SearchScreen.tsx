import React, { useState, useMemo, useCallback } from "react";
import { StyleSheet, FlatList, View, ActivityIndicator } from "react-native";
import debounce from "lodash.debounce";

import { Product } from "../../types/types";
import SearchProduct from "../../components/Search/SearchProduct";
import colors from "../../config/colors";
import SearchBar from "./SearchBar";
import productsData from "../../../assets/data/products";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(productsData);
  const [loading, setLoading] = useState<boolean>(false);

  const searchProducts = useCallback((query: string) => {
    if (!query) {
      setFilteredProducts(productsData);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();
    const filtered = productsData.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredProducts(filtered);
  }, []);

  const debouncedSearch = useMemo(
    () =>
      debounce((query: string) => {
        setLoading(true);
        searchProducts(query);
        setLoading(false);
      }, 300),
    [searchProducts]
  );

  const handleTextChange = (text: string) => {
    setSearchQuery(text);
    debouncedSearch(text);
  };

  const renderProduct = useCallback(
    ({ item }: { item: Product }) => <SearchProduct products={item} />,
    []
  );

  return (
    <View style={styles.container}>
      <SearchBar
        searchQuery={searchQuery}
        handleTextChange={handleTextChange}
      />
      {loading ? (
        <ActivityIndicator animating size="large" style={styles.loader} />
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item._id.$oid}
          renderItem={renderProduct}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={21}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.white,
    flex: 1,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.2,
    marginBottom: 10,
  },
  backButton: {
    width: 40,
    marginRight: 10,
  },
  searchBar: {
    marginBottom: 10,
    backgroundColor: colors.gray,
    flex: 1,
  },
  loader: {
    marginTop: 20,
  },
});

export default SearchScreen;
