import React from 'react';
import { StatusBar, View, StyleSheet, SafeAreaView } from 'react-native';

import Main from './src/screens/Main';

console.disableYellowBox = true;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
});
