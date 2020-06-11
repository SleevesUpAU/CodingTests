import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

type Props = {
  car: Car;
};

const CarListItem: React.SFC<Props> = ({
  car: {initialPrice, currentPrice, company},
}) => (
  <TouchableOpacity>
    <Text>{initialPrice}</Text>
    <Text>{currentPrice}</Text>
    <Text>{company}</Text>
  </TouchableOpacity>
);

export default CarListItem;
