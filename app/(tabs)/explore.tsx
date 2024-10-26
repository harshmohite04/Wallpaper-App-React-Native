import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DownloadSheet from "../BottomSheet";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const explore = () => {
  const [open, setOpen] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView>
        <Text>explore</Text>
        <TouchableOpacity
          onPress={() => {
            setOpen(true);
          }}
        >
          <Text>Open Download</Text>
        </TouchableOpacity>
        {open && <DownloadSheet onClose={()=>setOpen(false)}/>}
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default explore;

const styles = StyleSheet.create({});
