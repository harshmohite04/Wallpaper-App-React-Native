import React, { useCallback, useMemo, useRef } from "react";
import { View, Image,Text, StyleSheet, Button } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpaper";

const DownloadWallpaper = ({ onClose, wallpaper }: { onClose: () => void ,wallpaper:Wallpaper}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <BottomSheet
    onClose={onClose}
    snapPoints={["95%"]}
    ref={bottomSheetRef}
    onChange={handleSheetChanges}
    enablePanDownToClose={true}
    handleStyle={{display:"none"}}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Image style={styles.image} source={{ uri: wallpaper.url }} />
        <Text  style={styles.btn} onPress={() => {}}>Download</Text>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  image:{
   height:"60%",
   borderTopRightRadius:20,
   borderTopLeftRadius:20
  },
  btn:{
    color:"white",
    alignSelf:"center",
    fontSize:20,
    backgroundColor:"black",
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:10,
    marginTop:5
  }
});

export default DownloadWallpaper;
