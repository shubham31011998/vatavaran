import {View, Text, TouchableOpacity, Image, TextInput, Alert} from 'react-native'
import React, {useState} from 'react'
import {themeColors} from '../theme'
import {SafeAreaView} from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import {createUserWithEmailAndPassword} from '@firebase/auth';
import {auth} from '../config/firebase';
import Loader from '../components/Loader';

export default function Signup() {
    const navigation = useNavigation()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showLoader, setshowLoader] = useState(false);

    const handleSignup = async () => {
        setshowLoader(true);
        if (email && password) {
            try {
                await (()=>{
                    createUserWithEmailAndPassword(auth, email, password);
                    setshowLoader(false);
                })
            } catch (error) {
                console.log(error)
                setshowLoader(false);
                Alert.alert('Opps!', 'There might be an issue from firebase API. Let me check and get back to you asap :(');
            }
        }
        setshowLoader(false);
        Alert.alert('Opps!', 'You have entered incorrect Email or Password :)');
      
    }
    return (
        <View className="flex-1 " style={{backgroundColor: themeColors.white_1}}>
            <SafeAreaView className="flex">
                <View className="flex-row justify-start">
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
                        style={{backgroundColor: themeColors.green_1}}
                    >
                        <ArrowLeftIcon size="20" color="white" />
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center">
                    <Image source={require('../assets/images/welcome.png')}
                        style={{width: 165, height: 110, resizeMode: "contain"}} />
                </View>
            </SafeAreaView>
            <View className="flex-1 px-8 pt-8"
                style={{backgroundColor: themeColors.white_2, borderTopLeftRadius: 30, borderTopRightRadius: 30}}
            >
                <View className="form space-y-2">
                    <Text className="font-bold">Full Name</Text>
                    <TextInput
                        className="p-4 bg-white rounded-2xl mb-3"
                        placeholder='Enter Name'
                        placeholderTextColor="gray"
                    />
                    <Text className="font-bold ml-4">Email Address</Text>
                    <TextInput
                        className="p-4 bg-white rounded-2xl mb-3"
                        placeholder='Enter Email'
                        placeholderTextColor="gray"
                        value={email}
                        onChangeText={(value) => setEmail(value)}
                    />
                    <Text className="font-bold ml-4">Password</Text>
                    <TextInput
                        className="p-4 bg-white rounded-2xl mb-7"
                        secureTextEntry
                        placeholder='Enter Password'
                        placeholderTextColor="gray"
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                    />
                    <TouchableOpacity
                        className="py-3 rounded-xl"
                        style={{backgroundColor: themeColors.green_1}}
                        onPress={handleSignup}
                    >
                        {
                            showLoader
                                ?
                                <Loader />
                                :
                                <Text className="font-xl font-bold text-center text-white">
                                    Sign Up
                                </Text>

                        }
                    </TouchableOpacity>
                </View>
                <Text className="text-xl text-gray-400 font-bold text-center py-5">
                    Or
                </Text>
                <View className="flex-row justify-center space-x-12">
                    <TouchableOpacity className="p-2 bg-white rounded-2xl">
                        <Image source={require('../assets/icons/google.png')}
                            className="w-10 h-10" />
                    </TouchableOpacity>
                    <TouchableOpacity className="p-2 bg-white rounded-2xl">
                        <Image source={require('../assets/icons/apple.png')}
                            className="w-10 h-10" />
                    </TouchableOpacity>
                    <TouchableOpacity className="p-2 bg-white rounded-2xl">
                        <Image source={require('../assets/icons/facebook.png')}
                            className="w-10 h-10" />
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center mt-7">
                    <Text className="text-gray-500 font-semibold">Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text className="font-semibold" style={{color:themeColors.green_1}}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}