import React from 'react';
import {StyleSheet, View} from 'react-native';

import Button from 'src/components/Button';
import Text from 'src/components/Text';
import RowBase, {Props as BaseProps} from './RowBase';

import {color, constant} from 'src/styles';

const styles = StyleSheet.create({
  content: {},
});

interface Props extends BaseProps {
  value: string | undefined;
  options: string[];
  onChange: (value: string) => void;
}

const Selector: React.SFC<Props> = ({label, value, options, onChange}) => (
  <RowBase label={label}>
    <View style={styles.content}>
      <Button text="<" onPress={() => onChange(options[0])} />
      <Text>{value}</Text>
      <Button text=">" onPress={() => onChange(options[1])} />
    </View>
  </RowBase>
);

export default Selector;
