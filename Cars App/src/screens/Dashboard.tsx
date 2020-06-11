import React from 'react';

import Button from 'src/components/Button';
import Screen from 'src/components/Screen';

const Dashboard = ({navigation}) => (
  <Screen>
    <Button
      text="Dashboard Button"
      onPress={() => {
        navigation.navigate('CarDetails');
      }}
    />
  </Screen>
);

export default Dashboard;
