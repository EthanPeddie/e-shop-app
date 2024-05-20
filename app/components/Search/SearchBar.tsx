import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import colors from "../../config/colors";
import { Icon, Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

interface SearchProps {
  handleTextChange: (text: string) => void;
  searchQuery: string;
}

const SearchBar = ({ handleTextChange, searchQuery }: SearchProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchBarContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Icon source="arrow-left" size={35} />
      </TouchableOpacity>
      <Searchbar
        style={styles.searchBar}
        clearButtonMode="always"
        placeholder="Search"
        autoFocus
        onChangeText={handleTextChange}
        value={searchQuery}
      />
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
});
export default memo(SearchBar);
