import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import SelectItem from "../listItems/SelectItem";
import MovieItem from "../listItems/MovieItem";
import { getMoviesByType } from "../services/api";
import { useNavigation } from "@react-navigation/native";

const MoviesScreen = () => {
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState("upcoming");
  const [items, setItems] = useState([
    { label: "Now Playing", value: "now_playing" },
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
  ]);
  const navigation = useNavigation();

  const handleMoreDetails = (movieId) => {
    navigation.navigate("MovieDetails", { movieId, type: "movie" });
  };

  const handleMovieTypeChange = async (movieType) => {
    try {
      const movieResults = await getMoviesByType(movieType);
      setMovies(movieResults);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    handleMovieTypeChange(value);
  }, [value]);

  return (
    <View>
      <SelectItem
        value={value}
        items={items}
        setValue={setValue}
        onChangeItem={(itemValue) => setValue(itemValue)}
      />
      <FlatList
        data={movies}
        keyExtractor={(movie) => movie.id.toString()}
        renderItem={({ item: movie }) => (
          <MovieItem
            movie={movie}
            onPress={() => handleMoreDetails(movie.id)}
          />
        )}
      />
    </View>
  );
};

export default MoviesScreen;
