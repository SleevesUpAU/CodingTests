import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from 'src/navigators';

import Screen from 'src/components/Screen';
import Button from 'src/components/Button';

type Props = StackScreenProps<RootStackParamList, 'Dashboard'>;

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
