import axios from "axios";
import { BASE_URL, API_KEY, TOKEN } from "../config/api_config";

export const getMovieDetails = async (movieId, type) => {
  try {
    const response = await axios.get(`${BASE_URL}/${type}/${movieId}`, {
      headers: {
        Accept: "application/json",
        Authorization: `${TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export const searchMovies = async (query, searchType) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/${searchType}?api_key=${API_KEY}&query=${query}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};

export const getMoviesByType = async (movieType) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieType}`, {
      headers: {
        Accept: "application/json",
        Authorization: `${TOKEN}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const getTVShowsByType = async (tvShowType) => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/${tvShowType}`, {
      headers: {
        Accept: "application/json",
        Authorization: `${TOKEN}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching TV shows:", error);
    throw error;
  }
};

export default {
  getMovieDetails,
  searchMovies,
  getMoviesByType,
  getTVShowsByType,
};
