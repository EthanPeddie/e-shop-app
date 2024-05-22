import { Dimensions, StyleSheet } from "react-native";
import colors from "../../config/colors";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  productContainer: {
    width: windowWidth / 2 - 20,
    backgroundColor: colors.white,
    marginBottom: 10,
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
