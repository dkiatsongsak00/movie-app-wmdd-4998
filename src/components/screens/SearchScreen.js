import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MovieItem from "../listItems/MovieItem";
import { searchMovies } from "../services/api";
import { useNavigation } from "@react-navigation/native";
import Form from "../forms/Form";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("multi");
  const [items] = useState([
    { label: "Movie", value: "movie" },
    { label: "Multi", value: "multi" },
    { label: "TV", value: "tv" },
  ]);
  const [searchResults, setSearchResults] = useState([]);
  const [isQueryValid, setQueryValid] = useState(true);
  const [isSearchTypeValid, setSearchTypeValid] = useState(true);
  const [isInputFocused, setInputFocused] = useState(false);
  const navigation = useNavigation();

  const handleMoreDetails = (movieId, type) => {
    navigation.navigate("MovieDetails", { movieId, type });
  };

  const handleSearch = async () => {
    if (!query) {
      setQueryValid(false);
      return;
    }

    setQueryValid(true);

    try {
      const results = await searchMovies(query, value);
      setSearchResults(results);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Form
        query={query}
        setQuery={setQuery}
        value={value}
        setValue={setValue}
        items={items}
        setSearchTypeValid={setSearchTypeValid}
        handleSearch={handleSearch}
        isQueryValid={isQueryValid}
        isInputFocused={isInputFocused}
        setInputFocused={setInputFocused}
      />
      {searchResults.length === 0 ? (
        <View style={styles.emptyResultsContainer}>
          <Text style={styles.emptyResultsText}>Please initiate a search</Text>
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(movie) => movie.id.toString()}
          renderItem={({ item: movie }) => (
            <MovieItem
              movie={movie}
              onPress={() =>
                handleMoreDetails(
                  movie.id,
                  movie.media_type === "movie" || value === "movie"
                    ? "movie"
                    : "tv"
                )
              }
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyResultsText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 100,
  },
});

export default SearchScreen;
