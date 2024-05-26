import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  appbarIcon: {
    backgroundColor: colors.white,
    borderWidth: 0.5,
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  appbar: {
    height: 50,
    paddingHorizontal: 10,
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  appbarRight: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  scrollView: {
    position: "absolute",
    top: 70,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  productInfoContainer: {
    padding: 10,
    marginTop: 10,
  },
  productName: {
    fontSize: 30,
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 5,
  },
  rating: {
    borderRadius: 20,
    borderWidth: 0.5,
    flexDirection: "row",
    width: 100,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  ratingText: {
    fontSize: 17,
  },
  descriptionContainer: {
    marginTop: 5,
  },
  descriptionText: {
    fontSize: 15,
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,
    borderTopWidth: 0.2,
  },
  priceContainer: {
    width: 100,
  },
  price: {
    fontSize: 20,
  },
  addToCartButton: {
    width: 250,
    backgroundColor: colors.green,
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 15,
  },
  addToCartText: {
    fontSize: 18,
    color: colors.white,
    fontWeight: "700",
  },
});

export default styles;
