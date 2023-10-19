import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <SafeAreaView style={styles.container}>

    // </SafeAreaView>

    <View style={styles.container}>
      <StatusBar style="auto" />
      <WebView source={{ uri: 'http://192.168.12.249:9527/iflood/' }} style={styles.webview} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    marginTop: 20,
  },
});
