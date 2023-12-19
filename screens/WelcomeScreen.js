import { StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = () => {
  return (
    <Text style={styles.whiteText}>Welcomekjdsfkjskjdfskdjfskdjfkjsdfkjsdfkjsdhfkjsdhfkjshfkjshfkjsdhkfj\kdf
    Screen</Text>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    whiteText:{
      color:'#f0f0f0'
    },
    text:{
      color:"#fff",
      fontSize:34,
      fontWeight:600
    }
  });