import React from 'react';
import {Text as RNText, TextProps, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

const Text: React.SFC<TextProps> = ({style, ...props}) => (
  <RNText {...props} style={[styles.text, style]} />
);

export default Text;
