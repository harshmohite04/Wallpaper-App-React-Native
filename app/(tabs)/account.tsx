import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import DownloadSheet from "@/components/BottomSheet";
const account = () => {
  const [open, setOpen] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <Text>Account Page</Text>
      <TouchableOpacity
        onPress={() => {
          setOpen(true);
        }}
      >
        <Text>Open Download</Text>
      </TouchableOpacity>
      {open && <DownloadSheet onClose={() => setOpen(false)} />}
    </View>
  );
};

export default account;

const styles = StyleSheet.create({});
