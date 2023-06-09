import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MoviesScreen from "../screens/MoviesScreen";
import TVShowsScreen from "../screens/TVShowsScreen";
import SearchScreen from "../screens/SearchScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const AppStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="moviesapp"
        component={TabNavigator}
        options={{
          title: "Movies App",
          headerStyle: {
            backgroundColor: "#2c3e50",
          },
          headerTitleStyle: {
            color: "#fff",
            fontSize: 20,
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
        options={({ route }) => ({
          title:
            route.params.movie &&
            (route.params.movie.title || route.params.movie.name)
              ? route.params.movie.title || route.params.movie.name
              : "No Title",
          headerBackTitle: "Back to List",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
          },
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={MoviesScreen} />
      <Tab.Screen name="Search Results" component={SearchScreen} />
      <Tab.Screen name="TV Shows" component={TVShowsScreen} />
    </Tab.Navigator>
  );
};

export default AppStack;
