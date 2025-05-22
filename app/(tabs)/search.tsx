import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import React from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const Search = () => {
  const {
    data: movies,
    loading,
    error,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <View className="flex-1 bg-primary px-5">
      <Image source={images.bg} className="absolute w-full z-0" />

      <Text className="text-4xl font-bold text-white mt-20 mb-5">Search</Text>

      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={{
          gap: 16,
          justifyContent: "center",
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View>
              <SearchBar placeholder="Search movies..." />
            </View>

            {loading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                className="my-3"
              />
            )}

            {error && (
              <Text className="text-red-500 px-5 py-3">
                Error: {error.message}
              </Text>
            )}

            {!loading &&
              !error &&
              "Search Term".trim() &&
              movies?.length > 0 && (
                <Text className="text-xl font-bold text-white">
                  Search results for{" "}
                  <Text className="text-accent">Search Term</Text>
                </Text>
              )}
          </>
        }
      />
    </View>
  );
};

export default Search;
