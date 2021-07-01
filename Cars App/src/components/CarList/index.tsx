import React from 'react';
import {FlatList} from 'react-native';

import CarListItem from './CarListItem';

type Props = {
  cars: Car[];
  onPress: (car: Car) => void;
  onRemove: (car: Car) => void;
};

const CarList: React.SFC<Props> = ({cars, onPress, onRemove}) => (
  <FlatList
    data={cars}
    renderItem={({item}) => (
      <CarListItem car={item} onPress={onPress} onRemove={onRemove} />
    )}
    keyExtractor={({id}) => id.toString()}
  />
);

export default CarList;
