import React from 'react';
import {Button} from 'react-native';
import {RootStackScreenProps} from 'src/navigators';

import Screen from 'src/components/Screen';

type Props = RootStackScreenProps<'Dashboard'>;

const Dashboard = ({navigation}: Props) => (
  <Screen>
    <Button
      title="Dashboard Button"
      onPress={() => {
        navigation.navigate('CarDetails');
      }}
    />
  </Screen>
);

export default Dashboard;
