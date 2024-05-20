import { Dimensions, StyleSheet } from "react-native";
import colors from "../../config/colors";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    width,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden",
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  dot: {
    backgroundColor: "rgba(0,0,0,.2)",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: colors.green,
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
});
