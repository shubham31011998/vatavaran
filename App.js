import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app Welcome!</Text>
      <Text style={styles.whiteText}>"Vatavaran" brings you real-time weather updates in a visually stunning React Native interface. From the golden glow of sunshine to the gentle patter of raindrops, we've crafted an immersive experience to keep you connected to the elements. 📲☔</Text>
      <StatusBar style="auto" />
    </View>
  );
}

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
