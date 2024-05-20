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
      <View style={styles.contentContainer}>
        <ImageCarousel />
        <FlatList
          data={products}
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
