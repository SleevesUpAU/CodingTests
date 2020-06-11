import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import {color} from 'src/styles';

const Screen: React.SFC = ({children}) => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={{flex: 1, backgroundColor: color.primaryLight}}>
      <View style={{flex: 1, backgroundColor: color.neutral}}>{children}</View>
    </SafeAreaView>
  </>
);

export default Screen;
