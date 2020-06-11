import React from 'react';
import {FlatList} from 'react-native';

import CarListItem from './CarListItem';

type Props = {
  cars: Car[];
  onRemove: (car: Car) => void;
};

const CarList: React.SFC<Props> = ({cars, onRemove}) => (
  <FlatList
    data={cars}
    renderItem={({item}) => <CarListItem car={item} onRemove={onRemove} />}
    keyExtractor={({id}) => id.toString()}
  />
);

export default CarList;
