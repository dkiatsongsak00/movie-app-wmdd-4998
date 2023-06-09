import React, { useEffect, useState } from "react";
import { Text, Image, StyleSheet, ScrollView } from "react-native";
import { getMovieDetails } from "../services/api";

const MovieDetailsScreen = ({ route, navigation }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  const fetchMovieDetails = async () => {
    try {
      const response = await getMovieDetails(
        route.params.movieId,
        route.params.type
      );
      setMovieDetails(response);
      navigation.setParams({ movie: response });
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [route.params.movieId, route.params.type]);

  if (!movieDetails) {
    return <Text>Loading...</Text>;
  }

  const title =
    route.params.type === "tv" ? movieDetails.name : movieDetails.title;
  const releaseDate =
    route.params.type === "tv"
      ? movieDetails.first_air_date
      : movieDetails.release_date;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`,
        }}
        style={styles.image}
      />
      <Text style={styles.overview}>{movieDetails.overview}</Text>
      <Text style={styles.details}>
        Popularity: {movieDetails.popularity} | Release Date: {releaseDate}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 30,
    marginTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 50,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  overview: {
    marginTop: 20,
    marginBottom: 10,
  },
  details: {
    marginTop: 10,
    fontWeight: "bold",
  },
});

export default MovieDetailsScreen;
