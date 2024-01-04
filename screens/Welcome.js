import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import Loader from '../components/Loader';

export default function WelcomeScreen() {
    const [showLoader, setshowLoader] = useState(false);
    const navigation = useNavigation();
    const goToSignup = ()=>{
        setshowLoader(true)
        setTimeout(()=>{
            setshowLoader(false)
            navigation.navigate('Signup')
        },1000);
    }
    return (
        <SafeAreaView className="flex-1" style={{ backgroundColor: themeColors.black_1 }}>
            <View className="flex-1 flex justify-around my-4">
                <View className="flex-col justify-center items-center">
                    <Image source={require("../assets/images/atmos2.png")}
                        style={{ width: 300, height: 100, resizeMode: 'contain' }} />
                    <Image source={require("../assets/images/login2.png")}
                        style={{ width: 300, height: 300, resizeMode: 'contain' }} />
                </View>
                <View className="space-y-4">
                    <TouchableOpacity
                        onPress={goToSignup}
                        className="py-3 mx-7 rounded-xl" style={{ backgroundColor: themeColors.blue_1, position: "relative" }}>
                        {
                            showLoader
                                ? <Loader></Loader>
                                : <Text
                                    className="text-xl font-bold text-center"
                                    style={{ color: themeColors.white_1 }}
                                >
                                    Sign Up
                                </Text>
                        }
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