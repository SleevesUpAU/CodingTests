import React from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';

import Text from 'src/components/Text';

import {color, constant} from 'src/styles';

const styles = StyleSheet.create({
  container: {
    margin: constant.space.base,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    flex: 1,
    color: color.black,
    marginRight: constant.space.base,
  },
  input: {
    flex: 2,
    padding: constant.space.base,
    borderColor: color.black,
    borderWidth: constant.border.base,
    borderRadius: constant.radius.base,
    backgroundColor: color.white,
  },
});

interface Props extends TextInputProps {
  label: string;
}

const Input = ({label, style, ...props}: Props) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput {...props} style={[styles.input, style]} />
  </View>
);

export default Input;
