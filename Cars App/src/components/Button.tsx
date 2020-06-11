import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  onPress: TouchableOpacity['props']['onPress'];
}

const Button: React.SFC<Props> = ({text, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{text}</Text>
  </TouchableOpacity>
);

export default Button;
