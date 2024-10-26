import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Suggested from "../Suggested";
import Liked from "../Liked";
import Library from "../Library";

const Tab = createMaterialTopTabNavigator();
const index = () => {
  return (
    <View style={{flex:1}}>

    <Text>For you Page</Text>
    <Tab.Navigator>
      <Tab.Screen name="Suggested" component={Suggested} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
