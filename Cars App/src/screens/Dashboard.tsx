import React from 'react';

import {RootStackScreenProps} from 'src/navigators';

import Screen from 'src/components/Screen';
import Button from 'src/components/Button';

type Props = RootStackScreenProps<'Dashboard'>;

const Dashboard = ({navigation}: Props) => (
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
