import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import SelectItem from "../listItems/SelectItem";
import { Ionicons } from "@expo/vector-icons";

const Form = ({
  query,
  setQuery,
  value,
  setValue,
  items,
  setSearchTypeValid,
  handleSearch,
  isQueryValid,
  isInputFocused,
  setInputFocused,
}) => {
  const handleSearchTypeChange = (itemValue) => {
    setValue(itemValue);
    setSearchTypeValid(true);
  };

  return (
    <View style={styles.marginContainer}>
      <Text style={styles.title}>
        Search Movie/TV Show Name<Text style={styles.requiredField}>*</Text>
      </Text>
      <View
        style={[
          styles.searchContainer,
          !isQueryValid && styles.invalidInput,
          isInputFocused && styles.focusedInput,
        ]}
      >
        <Ionicons
          name="search"
          size={24}
          color="gray"
          style={styles.searchIcon}
        />
        <TextInput
          value={query}
          onChangeText={setQuery}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          placeholder="i.e. James Bond, CSI"
          style={styles.searchInput}
        />
      </View>
      {!isQueryValid && (
        <Text style={styles.invalidText}>Please enter a search query</Text>
      )}
      <Text style={styles.title}>
        Choose Search Type<Text style={styles.requiredField}>*</Text>
      </Text>
      <View style={styles.searchSection}>
        <SelectItem
          value={value}
          items={items}
          setValue={handleSearchTypeChange}
          onChangeItem={() => setSearchTypeValid(true)}
        />

        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Ionicons name="search" size={24} color="white" />
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.requiredText}>Please select a search type</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  marginContainer: {
    marginHorizontal: 50,
    marginVertical: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderRadius: 5,
    marginBottom: 8,
    paddingVertical: 8,
  },
  requiredField: {
    color: "red",
  },
  invalidInput: {
    borderColor: "red",
    borderWidth: 1,
  },
  invalidText: {
    color: "red",
    fontSize: 12,
    marginBottom: 8,
  },
  requiredText: {
    fontSize: 12,
    marginBottom: 8,
    marginTop: 8,
  },
  searchIcon: {
    marginLeft: 8,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: "gray",
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: -50,
    marginVertical: -30,
  },
  searchButton: {
    flexDirection: "row",
    backgroundColor: "#01B4E4",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  searchButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 5,
  },
  focusedInput: {
    borderColor: "#01B4E4",
    borderWidth: 1,
  },
});

export default Form;
