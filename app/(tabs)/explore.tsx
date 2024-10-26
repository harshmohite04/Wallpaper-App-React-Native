import { StyleSheet, Image, SafeAreaView, View } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpaper";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import ImageCard from "@/components/ImageCard";
import { ThemedView } from "@/components/ThemedView";
import DownloadWallpaper from "@/components/BottomSheet";
const explore = () => {
  const wallpapers = useWallpapers();
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(
    null
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            style={{ flex: 1 }}
            source={{
              uri: wallpapers[0]?.url ?? "",
            }}
          />
        }
      >
        <ThemedView style={styles.container}>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_, index) => index % 2 === 0)}
              renderItem={({ item }) => (
                <ImageCard
                  onPress={() => {
                    setSelectedWallpaper(item);
                  }}
                  wallpaper={item}
                />
              )}
              keyExtractor={(item) => item.name}
            ></FlatList>
          </ThemedView>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_, index) => index % 2 === 1)}
              renderItem={({ item }) => (
                <ImageCard
                  onPress={() => {
                    setSelectedWallpaper(item);
                  }}
                  wallpaper={item}
                />
              )}
              keyExtractor={(item) => item.name}
            ></FlatList>
          </ThemedView>
        </ThemedView>
      </ParallaxScrollView>
      {selectedWallpaper && (
        <DownloadWallpaper wallpaper={selectedWallpaper} onClose={() => setSelectedWallpaper(null)} />
      )}
    </SafeAreaView>
  );
};

export default explore;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
});
