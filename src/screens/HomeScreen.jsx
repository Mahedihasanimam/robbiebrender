import { View, Text } from 'react-native'
import React from 'react'
import MainScreenHeader from '../components/Header'
import tw from '../lib/tailwind'

const HomeScreen = () => {
  return (
    <View style={tw`h-full bg-white `}>
        <MainScreenHeader/>

        <View style={tw`px-4`}>

      <Text>HomeScreen</Text>
        </View>
    </View>
  )
}

export default HomeScreen