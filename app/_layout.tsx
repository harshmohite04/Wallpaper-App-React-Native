import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Layout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView>
        {/* <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="(nobottombar)"
            options={{
              headerShown: true,
              headerTitle: "Account Info",
              headerBackTitle: "Go Back",
            }}
          />
        </Stack> */}
        <Slot />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({});
