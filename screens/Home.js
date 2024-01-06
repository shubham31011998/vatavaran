import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {signOut} from '@firebase/auth'
import {auth} from '../config/firebase'
import {themeColors} from '../theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {Image} from 'react-native'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import Features from './Features'

const Home = () => {
  const [message, setMessage] = useState([])
  const handleLogout = async () => {
    await signOut(auth);
  }
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex flex-1 mx-5">
      <View className="flex-row justify-start">
          <TouchableOpacity
              onPress={handleLogout}
              className="p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
              style={{backgroundColor: themeColors.green_1}}
          >
              <ArrowLeftIcon size="20" color="white" />
          </TouchableOpacity>
      </View>

        <View className="flex-row justify-center">
          <Image source={require("../assets/images/welcome.png")} style={{width: hp(15), height: hp(15), resizeMode: 'contain'}} />
        </View>

        {
          message.length > 0
          ?
          <View>

          </View>
          :
          <Features/>
        }
      </SafeAreaView>
    </View>
  )
}

export default Home