import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {color, constant} from 'src/styles';

const styles = StyleSheet.create({
  container: {
    margin: constant.space.base,
    padding: constant.space.base,
    borderColor: color.black,
    borderWidth: constant.border.base,
    borderRadius: constant.radius.base,
  },
});

type Props = {
  car: Car;
  onRemove: (car: Car) => void;
};

const CarListItem: React.SFC<Props> = ({car, onRemove}) => {
  const {initialPrice, currentPrice, company} = car;

  return (
    <TouchableOpacity style={styles.container} onPress={() => onRemove(car)}>
      <Text>{initialPrice}</Text>
      <Text>{currentPrice}</Text>
      <Text>{company}</Text>
    </TouchableOpacity>
  );
};

export default CarListItem;
