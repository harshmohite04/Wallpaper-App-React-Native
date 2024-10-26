import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

const RootLayout = () => {
  return (<>
    <View>
        <Text style={{backgroundColor:"black",color:"white"}}>Go back</Text>    
    </View>
    <Slot/>
  </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})