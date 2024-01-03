import {View, Text, StyleSheet, Animated} from 'react-native'
import React from 'react'

const Loader = () => {
    const styles = StyleSheet.create({
        outer: {
            width: 25,
            height: 25,
            borderRadius: 100,
            borderWidth: 5,
            borderColor: "#4a8be0",
            borderBottomColor: "#fff",
            borderTopColor: "#fff",
            position: 'absolute',
            top: '50%',      // Adjust vertical positioning as needed
            left: '50%',     // Adjust horizontal positioning as needed
            marginLeft: -12.5,  // Adjust for half the width
            marginTop: -12.5,   // Adjust for half the height
            // transform: [{
            //     rotate: Animated.loop(
            //         new Animated.Value(0).interpolate({
            //             inputRange: [0, 1],
            //             outputRange: ['0deg', '360deg']
            //         })
            //     )._value // Convert Animated.Value to string
            // }]
        }
    });

    return (
        <View style={styles.outer}>
            
        </View>
    )
}

export default Loader