import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const MovieItem = ({ movie, onPress }) => {
  const { popularity, release_date, first_air_date } = movie;

  return (
    <View style={styles.container} key={movie.id}>
      <View style={styles.rowContainer}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
          }}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{movie.title || movie.name}</Text>
          <Text>Popularity: {popularity}</Text>
          {movie.title ? (
            <Text>Release Date: {release_date}</Text>
          ) : (
            <Text>Release Date: {first_air_date}</Text>
          )}
          <TouchableOpacity
            style={styles.button}
            onPress={() => onPress(movie.id)}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>More Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    padding: 10,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
  },
  button: {
    backgroundColor: "#01B4E4",
    borderRadius: 5,
    paddingVertical: 10,
    marginRight: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default MovieItem;
