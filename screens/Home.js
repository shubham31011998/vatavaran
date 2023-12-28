import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import {signOut} from '@firebase/auth'
import {auth} from '../config/firebase'

const Home = () => {
    const handleLogout = async()=>{
        await signOut(auth);
    }
  return (
    <SafeAreaView className="flex-1 flex-row justify-center items-center">
      <Text className="text-lg">Home - </Text>
      <TouchableOpacity
        className="px-5 py-2 bg-red-400 rounded-lg"
        onPress={handleLogout}
      >
        <Text className="text-white text-lg font-bold">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home