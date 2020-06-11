import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

type Props = {
  car: Car;
  onRemove: (car: Car) => void;
};

const CarListItem: React.SFC<Props> = ({car, onRemove}) => {
  const {initialPrice, currentPrice, company} = car;

  return (
    <TouchableOpacity onPress={() => onRemove(car)}>
      <Text>{initialPrice}</Text>
      <Text>{currentPrice}</Text>
      <Text>{company}</Text>
    </TouchableOpacity>
  );
};

export default CarListItem;
