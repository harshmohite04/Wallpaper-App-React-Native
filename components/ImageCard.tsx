import { StyleSheet, Image, Text, View, useColorScheme } from "react-native";
import React from "react";
import { Wallpaper } from "@/hooks/useWallpaper";
import { ThemedView } from "./ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
const ImageCard = ({ wallpaper }: { wallpaper: Wallpaper }) => {
  const theme = useColorScheme() ?? "light";
  return (
    <View>
      <Image source={{ uri: wallpaper.url }} style={styles.image} />
      <ThemedView style={styles.labelContainer}>
        <Text style={styles.label}>{wallpaper.name}</Text>
        <Ionicons
          style={styles.icon}
          name={"heart"}
          size={18}
          color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
        />
      </ThemedView>
    </View>
  );
};
export default ImageCard;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 200,
    borderRadius: 10,
    margin: 5,
  },
  label: {
    fontSize: 20,
    color: "white",
  },
  labelContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 10,
  },
  icon: {
    // left: 100,
  },
});
