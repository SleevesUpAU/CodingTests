import React from 'react';
import {Text as RNText, TextProps, StyleSheet} from 'react-native';

import {color} from 'src/styles';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: color.black,
  },
});

interface Props extends TextProps {
  isError?: boolean;
}

const Text: React.SFC<Props> = ({style, isError, ...props}) => (
  <RNText
    {...props}
    style={[styles.text, isError && {color: color.error}, style]}
  />
);

export default Text;
