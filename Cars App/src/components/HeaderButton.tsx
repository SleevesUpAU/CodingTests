import React from 'react';
import {Button} from 'react-native';

import {color} from 'src/styles';

interface Props {
  text: string;
  onPress: () => void;
}

const HeaderButton: React.SFC<Props> = ({text, onPress}) => (
  <Button title={text} color={color.black} onPress={onPress} />
);

export default HeaderButton;
