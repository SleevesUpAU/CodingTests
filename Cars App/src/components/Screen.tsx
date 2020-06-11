import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

const Screen: React.SFC = (props) => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView {...props} />
  </>
);

export default Screen;
