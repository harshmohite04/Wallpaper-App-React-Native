import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

const account = () => {
  return (
    <SafeAreaView>
      <Text>account</Text>
      <Link href="/accountInfo">
      <Text>Go to Account Info</Text>
      </Link>
    </SafeAreaView>
  )
}

export default account

const styles = StyleSheet.create({})