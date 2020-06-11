import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

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

type Props = TextInputProps;

const Input = ({style, ...props}: Props) => (
  <TextInput {...props} style={[styles.container, style]} />
);

export default Input;
