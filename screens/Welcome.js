import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {themeColors} from '../theme';
import {useNavigation} from '@react-navigation/native';
import LoaderKit from 'react-native-loader-kit'

export default function WelcomeScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="flex-1" style={{backgroundColor: themeColors.black_1}}>
            <View className="flex-1 flex justify-around my-4">
                <View className="flex-col justify-center items-center">
                    <Image source={require("../assets/images/atmos2.png")}
                        style={{width: 300, height: 100, resizeMode: 'contain'}} />
                    <Image source={require("../assets/images/login2.png")}
                        style={{width: 300, height: 300, resizeMode: 'contain'}} />
                    <LoaderKit
                        style={{width: 50, height: 50}}
                        name={'BallPulse'} // Optional: see list of animations below
                        size={50} // Required on iOS
                        color={'red'} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
                    />
                </View>
                {/* <View>
                    <Text
                        className="font-bold text-4xl text-center" style={{color: themeColors.white_1}}>
                        Let's Get Started!
                    </Text>
                    <Text className="text-gray-300 text-center text-lg text-yellow-400" >
                        <Text className="font-bold">"AtmosApp"</Text> brings you real-time weather updates on a few steps.
                    </Text>
                </View> */}
                <View className="space-y-4">
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Signup')}
                        className="py-3 mx-7 rounded-xl" style={{backgroundColor: themeColors.blue_1}}>
                        <Text
                            className="text-xl font-bold text-center"
                            style={{color: themeColors.white_1}}
                        >
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                    <View className="flex-row justify-center">
                        <Text className="text-white font-semibold">Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text className="font-semibold text-yellow-400"> Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}