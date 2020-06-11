import React from 'react';
import {FlatList} from 'react-native';

import CarListItem from './CarListItem';

type Props = {
  items: Car[];
};

const CarList: React.SFC<Props> = ({items}) => (
  <FlatList
    data={items}
    renderItem={({item}) => <CarListItem car={item} />}
    keyExtractor={({id}) => id.toString()}
  />
);

export default CarList;
