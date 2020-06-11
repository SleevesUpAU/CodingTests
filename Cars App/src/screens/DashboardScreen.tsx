import React, {useState} from 'react';
import {Button} from 'react-native';
import {RootStackScreenProps} from 'src/navigators';

import Screen from 'src/components/Screen';
import CarList from 'src/components/CarList';
import {color} from 'src/styles';

type Props = RootStackScreenProps<'Dashboard'>;

const mockData: Car[] = [
  {
    id: '1',
    initialPrice: 1000,
    currentPrice: 800,
    company: 'Toyota',
  },
];

const DashboardScreen = ({navigation}: Props) => {
  const [cars, setCars] = useState(mockData);

  const addCar = (car: Car) => {
    setCars([car, ...cars]);
  };
  const removeCar = ({id: idToRemove}: Car) => {
    setCars(cars.filter((car) => car.id !== idToRemove));
  };

  navigation.setOptions({
    headerRight: () => (
      <Button
        title="Add Car"
        color={color.black}
        onPress={() => navigation.navigate('AddCar', {onAdd: addCar})}
      />
    ),
  });

  return (
    <Screen>
      <CarList cars={cars} onRemove={removeCar} />
    </Screen>
  );
};

export default DashboardScreen;
