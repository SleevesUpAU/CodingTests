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
  leftText: {
    fontWeight: 'bold',
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

const getPriceText = (
  delta: number,
): {
  color: string;
  text: string;
} => {
  if (delta > 0) {
    return {color: color.success, text: `+ ${delta}`};
  } else if (delta < 0) {
    return {color: color.error, text: `- ${delta * -1}`};
  }
  return {color: color.neutralDark, text: '0'};
};

const CarListItem: React.SFC<Props> = ({car, onPress, onRemove}) => {
  const {initialPrice, currentPrice = initialPrice, company, model} = car;

  const {color, text} = getPriceText(currentPrice - initialPrice);

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(car)}>
      <Text>
        <Text style={styles.leftText}>{company} </Text>
        <Text>{model}</Text>
      </Text>
      <Text style={{textAlignVertical: 'center'}}>
        <Text style={styles.leftText}>Price Change : </Text>
        <Text style={{color, textAlignVertical: 'center'}}>{text}</Text>
      </Text>
      <TouchableOpacity style={styles.exit} onPress={() => onRemove(car)}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>X</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CarListItem;
