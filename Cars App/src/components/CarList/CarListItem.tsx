import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import Text from 'src/components/Text';

import {color, constant} from 'src/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: constant.space.base,
    padding: constant.space.base,
    paddingRight: 0,
    backgroundColor: color.neutral,
    borderColor: color.black,
    borderWidth: constant.border.base,
    borderRadius: constant.radius.base,
  },
  carDetails: {
    flex: 1,
  },
  exit: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: constant.size.base,
    minWidth: constant.size.base,
  },
  exitText: {
    fontSize: 20,
    fontWeight: 'bold',
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
  textColor: string;
  text: string;
} => {
  if (delta > 0) {
    return {textColor: color.success, text: `+ ${delta}`};
  } else if (delta < 0) {
    return {textColor: color.error, text: `- ${delta * -1}`};
  }
  return {textColor: color.neutralDark, text: '0'};
};

const CarListItem: React.SFC<Props> = ({car, onPress, onRemove}) => {
  const {initialPrice, currentPrice = initialPrice, company, model} = car;

  const {textColor, text} = getPriceText(currentPrice - initialPrice);

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(car)}>
      <View style={styles.carDetails}>
        <Text>{company}</Text>
        <Text>{model}</Text>
      </View>
      <Text style={{color: textColor}}>{text}</Text>
      <TouchableOpacity style={styles.exit} onPress={() => onRemove(car)}>
        <Text style={styles.exitText}>X</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CarListItem;
