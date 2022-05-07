import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';

import {color} from './src/main/styles';
import SignIn from './src/screens/Auth/SignIn';
import Welcome from './src/screens/Auth/Welcome';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={color.mainContent} />
      {/* <SignIn /> */}
      <Welcome />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
