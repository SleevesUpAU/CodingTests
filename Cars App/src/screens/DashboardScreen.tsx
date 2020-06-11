import React, {useState} from 'react';
import {Alert} from 'react-native';
import {RootStackScreenProps} from 'src/navigators';

import Screen from 'src/components/Screen';
import CarList from 'src/components/CarList';
import HeaderButton from 'src/components/HeaderButton';

type Props = RootStackScreenProps<'Dashboard'>;

const mockData: Car[] = [
  {
    id: '1',
    initialPrice: 1000,
    currentPrice: 800,
    company: 'Totoya',
    model: 'Macery',
  },
  {
    id: '2',
    initialPrice: 2000,
    currentPrice: 2000,
    company: 'Dorf',
    model: 'Ciesta',
  },
  {
    id: '3',
    initialPrice: 1000,
    currentPrice: 2000,
    company: 'Volkspanzer',
    model: 'Minigolf',
  },
];

const DashboardScreen = ({navigation}: Props) => {
  const [cars, setCars] = useState(mockData);

  const addEditCar = (car: Car) => {
    setCars([car, ...cars.filter(({id}) => id !== car.id)]);
  };
  const removeCar = ({id: idToRemove}: Car) => {
    Alert.alert('Confirm Remove', 'You are sure you want to remove a car?', [
      {
        style: 'cancel',
        text: 'Remove',
        onPress: () => setCars(cars.filter((car) => car.id !== idToRemove)),
      },
      {text: 'Cancel'},
    ]);
  };

  navigation.setOptions({
    headerRight: () => (
      <HeaderButton
        text="Add Car"
        onPress={() =>
          navigation.navigate('CarDetail', {onComplete: addEditCar})
        }
      />
    ),
  });

  return (
    <Screen>
      <CarList
        cars={cars}
        onPress={(car) =>
          navigation.navigate('CarDetail', {car, onComplete: addEditCar})
        }
        onRemove={removeCar}
      />
    </Screen>
  );
};

export default DashboardScreen;
