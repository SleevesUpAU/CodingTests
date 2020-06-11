import React from 'react';
import {StyleSheet, View} from 'react-native';

import Button from 'src/components/Button';
import Text from 'src/components/Text';
import RowBase, {Props as BaseProps} from './RowBase';

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    textAlign: 'center',
  },
});

interface Props<T> extends BaseProps {
  value: T | undefined;
  options: T[];
  onChange: (value: T) => void;
}

const Selector = <T,>({label, value, options, onChange}: Props<T>) => {
  const nextValue = (direction: -1 | 1) => {
    const l = options.length;
    if (l > 0) {
      const indexOfValue = options.findIndex((ent) => ent === value);

      if (indexOfValue >= 0) {
        const newIndex = indexOfValue + direction;
        onChange(options[((newIndex % l) + l) % l]);
      } else {
        onChange(options[0]);
      }
    }
  };

  return (
    <RowBase label={label}>
      <View style={styles.content}>
        <Button text="<" onPress={() => nextValue(-1)} />
        <Text style={styles.text}>{value}</Text>
        <Button text=">" onPress={() => nextValue(1)} />
      </View>
    </RowBase>
  );
};

export default Selector;
