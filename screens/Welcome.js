import { View, Text } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {themeColors} from '../theme'

export default function Welcome() {
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor:themeColors.bg}}>
      <View className="flex-1 flex justify-around my-4">
        <Text>Welcome</Text>
      </View>
    </SafeAreaView>
  )
}