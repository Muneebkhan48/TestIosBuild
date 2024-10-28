import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const WebPageScreen = () => {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: 'https://erp.tamelectronics.com/' }} // replace with your URL
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default WebPageScreen;
