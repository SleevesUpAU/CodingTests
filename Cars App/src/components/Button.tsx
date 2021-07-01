import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import Text from 'src/components/Text';

import {color, constant} from 'src/styles';

const styles = StyleSheet.create({
  container: {
    margin: constant.space.base,
    padding: constant.space.base,
    borderColor: color.primary,
    borderWidth: constant.border.base,
    borderRadius: constant.radius.base,
    backgroundColor: color.primaryLight,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: color.black,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

interface Props extends TouchableOpacityProps {
  text: string;
}

const Button: React.SFC<Props> = ({style, text, ...props}) => {
  const {disabled} = props;

  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, disabled && styles.disabled, style]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
