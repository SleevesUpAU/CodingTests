import React from 'react';
import {Button} from 'react-native';
import {RootStackScreenProps} from 'src/navigators';

import Screen from 'src/components/Screen';
import CarList from 'src/components/CarList';

type Props = RootStackScreenProps<'Dashboard'>;

const mockData: Car[] = [
  {
    id: 1,
    initialPrice: 1000,
    currentPrice: 800,
    company: 'Toyota',
  },
];

const DashboardScreen = ({navigation}: Props) => {
  navigation.setOptions({
    headerRight: () => (
      <Button title="Add Car" onPress={() => navigation.navigate('AddCar')} />
    ),
  });

  return (
    <Screen>
      <CarList items={mockData} />
      <Button
        title="Dashboard Button"
        onPress={() => {
          navigation.navigate('CarDetails');
        }}
      />
    </Screen>
  );
};

export default DashboardScreen;
