import {View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image} from 'react-native'
import React, {useState} from 'react'
import {signOut} from '@firebase/auth'
import {auth} from '../config/firebase'
import {themeColors} from '../theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {ArrowLeftIcon, StopCircleIcon, TrashIcon} from 'react-native-heroicons/solid'
import Features from './Features'
import {dummyMessages} from '../config/constants'


const Home = () => {
  const [messages, setMessages] = useState(dummyMessages);
  const [recordingBtn, setrecordingBtn] = useState(false);
  const [speaking, setSpeaking] = useState(true);
  
  const handleLogout = async () => {
    await signOut(auth);
  }

  const clearAllMsg = ()=>{
    setMessages([]);
  }

  const stopSpeakingFun = () => {
    setSpeaking(true);
  }
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex flex-1 mx-2">
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
          <Image source={require("../assets/images/welcome.png")} style={{width: hp(12), height: hp(10), resizeMode: 'contain'}} />
        </View>

        {
          messages.length > 0
            ?
            <View className="space-y-2 flex-1">
              <Text style={{fontSize: wp(6.5)}} className="font-bold">Assistant</Text>

              <View className="bg-neutral-200 rounded-3xl p-4" style={{height: hp(60)}}>
                <ScrollView
                  bounces={false}
                  className="space-y-4"
                  showsVerticalScrollIndicator={false}
                >
                  {
                    messages.map((message, index) => {
                      if (message.role === "assistant") {
                        if (message.content.includes("https")) {
                          // let imgUrl = '"' + message.content + '"';
                          return (
                            <View className="flex-row justify-start shadow" key={index}>
                              <View
                                style={{width: wp(70), backgroundColor: themeColors.white_1}}
                                className="flex rounded-xl p-2 rounded-bl-none"
                              >
                                <Image
                                  source={{uri: message.content}}
                                  className="rounded-2xl"
                                  resizeMode="contain"
                                  style={{height: wp(65), width: wp(65)}}
                                />
                              </View>
                            </View>
                          )
                        } else {
                          return (
                            <View
                              style={{width: wp(70), backgroundColor: themeColors.white_1}}
                              key={index}
                              className="rounded-xl p-2 rounded-bl-none shadow"
                            >
                              <Text>{message.content}</Text>
                            </View>
                          )
                        }
                      } else {
                        return (
                          <View className="flex-row justify-end shadow" key={index}>
                            <View
                              style={{width: wp(70), backgroundColor: themeColors.green_3}}
                              className="rounded-xl p-2 rounded-br-none"
                            >
                              <Text>{message.content}</Text>
                            </View>
                          </View>
                        )
                      }
                    })
                  }
                </ScrollView>
              </View>
            </View>
            :
            <Features />
        }

        <View className="flex justify-center items-center">
          {
            recordingBtn
              ? (
                <TouchableOpacity>
                  <Image
                    className="rounded-full"
                    source={require("../assets/images/voiceLoading.gif")}
                    style={{width: hp(10), height: hp(10)}}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity>
                  <Image
                    className="rounded-full"
                    source={require("../assets/images/recordingIcon.png")}
                    style={{width: hp(10), height: hp(10)}}
                  />
                </TouchableOpacity>
              )
          }

          {/* Clear All Msg Button */}
          {
            messages.length > 0 && (
              <TouchableOpacity className="bg-blue-400 rounded-3xl p-2 absolute right-5" onPress={clearAllMsg}>
                <TrashIcon  fill="white" size={30} />
              </TouchableOpacity>
            )
          }


          {/* Speaking Button */}
          {
            speaking && (
              <TouchableOpacity className="bg-red-400 rounded-3xl p-2 absolute left-5" onPress={stopSpeakingFun}>
                <StopCircleIcon  fill="white" size={30} />
              </TouchableOpacity>
            )
          }
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Home