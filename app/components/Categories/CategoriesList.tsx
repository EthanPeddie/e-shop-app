import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { memo } from "react";

import { Category } from "../../types/types";
import colors from "../../config/colors";

interface CategoryProps {
  categories: Category;
  handleCategoryPress: (categoryId: string) => void;
  selectedCategory: string;
}

const CategoriesList = ({
  categories,
  handleCategoryPress,
  selectedCategory,
}: CategoryProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        categories._id.$oid === selectedCategory && styles.activeButton,
      ]}
      onPress={() => handleCategoryPress(categories._id.$oid)}
    >
      <Text
        style={[
          styles.text,
          categories._id.$oid === selectedCategory && styles.activeText,
        ]}
      >
        {categories.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.white,
    height: 50,
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 60,
    borderWidth: 0.3,
  },
  activeButton: {
    backgroundColor: colors.green,
    borderWidth: 0,
  },
  text: {
    color: colors.black,
    fontSize: 20,
    textAlign: "center",
  },
  activeText: {
    color: colors.white,
    fontSize: 20,
    textAlign: "center",
  },
});

export default memo(CategoriesList);
