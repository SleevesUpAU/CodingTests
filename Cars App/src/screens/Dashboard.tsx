import React from 'react';
import {Text} from 'react-native';

import Button from 'src/components/Button';
import Screen from 'src/components/Screen';

const Dashboard = () => (
  <Screen>
    <Button
      text="Test Button"
      onPress={() => {
        console.log('Pressed');
      }}
    />
  </Screen>
);

export default Dashboard;
