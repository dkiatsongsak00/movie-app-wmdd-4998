import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { getTVShowsByType } from "../services/api";
import SelectItem from "../listItems/SelectItem";
import MovieItem from "../listItems/MovieItem";
import { useNavigation } from "@react-navigation/native";

const TVShowsScreen = () => {
  const [tvShows, setTVShows] = useState([]);
  const [value, setValue] = useState("top_rated");
  const [items, setItems] = useState([
    { label: "Airing Today", value: "airing_today" },
    { label: "On the Air", value: "on_the_air" },
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
  ]);
  const navigation = useNavigation();

  const handleMoreDetails = (movieId) => {
    navigation.navigate("MovieDetails", { movieId, type: "tv" });
  };

  const handleTVShowTypeChange = async (tvShowType) => {
    try {
      const tvShows = await getTVShowsByType(tvShowType);
      setTVShows(tvShows);
    } catch (error) {
      console.error("Error fetching TV shows:", error);
    }
  };

  useEffect(() => {
    handleTVShowTypeChange(value);
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
        data={tvShows}
        keyExtractor={(tvShow) => tvShow.id.toString()}
        renderItem={({ item: tvShow }) => (
          <MovieItem
            movie={tvShow}
            onPress={() => handleMoreDetails(tvShow.id)}
          />
        )}
      />
    </View>
  );
};

export default TVShowsScreen;
