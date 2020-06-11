import React from 'react';
import {SafeAreaView, StatusBar, View, StyleSheet} from 'react-native';

import {color} from 'src/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryLight,
  },
  content: {
    flex: 1,
    backgroundColor: color.neutralLight,
  },
});

const Screen: React.SFC = ({children}) => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  </>
);

export default Screen;
