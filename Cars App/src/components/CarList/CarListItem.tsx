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
  exit: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: constant.size.base,
    minWidth: constant.size.base,
    position: 'absolute',
    top: 0,
    right: 0,
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
      <TouchableOpacity style={styles.exit} onPress={() => onRemove(car)}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>X</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CarListItem;
