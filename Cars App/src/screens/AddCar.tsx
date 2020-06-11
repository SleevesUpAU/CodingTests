import React from 'react';

import {RootStackScreenProps} from 'src/navigators';

import Screen from 'src/components/Screen';
import Button from 'src/components/Button';

type Props = RootStackScreenProps<'AddCar'>;

const AddCar = () => (
  <Screen>
    <Button
      text="CarDetails Button"
      onPress={() => {
        console.log('Pressed');
      }}
    />
  </Screen>
);

export default AddCar;
