import React from 'react';
import {Button} from 'react-native';
import {RootStackScreenProps} from 'src/navigators';

import Screen from 'src/components/Screen';

type Props = RootStackScreenProps<'Dashboard'>;

const Dashboard = ({navigation}: Props) => {
  navigation.setOptions({
    headerRight: () => (
      <Button title="Add Car" onPress={() => navigation.navigate('AddCar')} />
    ),
  });

  return (
    <Screen>
      <Button
        title="Dashboard Button"
        onPress={() => {
          navigation.navigate('CarDetails');
        }}
      />
    </Screen>
  );
};

export default Dashboard;
