import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Text from 'src/components/Text';

import {color, constant} from 'src/styles';

const styles = StyleSheet.create({
  container: {
    margin: constant.space.base,
    padding: constant.space.base,
    backgroundColor: color.neutral,
    borderColor: color.black,
    borderWidth: constant.border.base,
    borderRadius: constant.radius.base,
  },
});

type Props = {
  car: Car;
  onPress: (car: Car) => void;
  onRemove: (car: Car) => void;
};

const CarListItem: React.SFC<Props> = ({car, onPress, onRemove}) => {
  const {initialPrice, currentPrice, company} = car;

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(car)}>
      <Text>{initialPrice}</Text>
      <Text>{currentPrice}</Text>
      <Text>{company}</Text>
      <TouchableOpacity onPress={() => onRemove(car)}>
        <Text>X</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CarListItem;
