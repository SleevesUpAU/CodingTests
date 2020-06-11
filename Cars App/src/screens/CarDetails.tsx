import React from 'react';
import {Button} from 'react-native';

import {RootStackScreenProps} from 'src/navigators';

import Screen from 'src/components/Screen';

type Props = RootStackScreenProps<'CarDetails'>;

const CarDetails = () => (
  <Screen>
    <Button
      title="CarDetails Button"
      onPress={() => {
        console.log('Pressed');
      }}
    />
  </Screen>
);

export default CarDetails;
