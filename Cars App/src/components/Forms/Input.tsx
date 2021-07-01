import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

import RowBase, {Props as BaseProps} from './RowBase';

import {color, constant} from 'src/styles';

const styles = StyleSheet.create({
  input: {
    padding: constant.space.base,
    borderColor: color.black,
    borderWidth: constant.border.base,
    borderRadius: constant.radius.base,
    backgroundColor: color.white,
  },
});

type Props = BaseProps & TextInputProps;

const Input = ({label, style, ...props}: Props) => (
  <RowBase label={label}>
    <TextInput {...props} style={[styles.input, style]} />
  </RowBase>
);

export default Input;
