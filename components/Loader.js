import React, { useRef, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Animated, Text, View, Easing } from 'react-native';

const styles = StyleSheet.create({
    outer: {
        width: 25,
        height: 25,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: "#4a8be0",
        borderBottomColor: "#fff",
        borderTopColor: "#fff",
        // position: 'absolute',
    }
});
// You can then use your `FadeInView` in place of a `View` in your components:
const Loader = () => {
    let rotateValueHolder = new Animated.Value(0);

    const startImageRotateFunction = () => {
        rotateValueHolder.setValue(0);
        Animated.timing(rotateValueHolder, {
            toValue: 1,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(() => startImageRotateFunction());
    };

    const rotateData = rotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    useEffect(() => {
        startImageRotateFunction();
    }, [])
    

    return (
        <View
            style={{
                // flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Animated.View // Special animatable View
                style={{
                    ...styles.outer,
                    transform: [{ rotate: rotateData }], // Bind opacity to animated value
                }}>
            </Animated.View>
        </View>
    );
};

export default Loader