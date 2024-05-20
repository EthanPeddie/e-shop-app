import React, { useState, useMemo, useCallback } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import debounce from "lodash.debounce";

import { Product } from "../../types/types";
import SearchProduct from "../../components/Search/SearchProduct";
import productsData from "../../../assets/data/products";
import SearchBar from "../../components/Search/SearchBar";
import { styles } from "./style";

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

export default SearchScreen;
