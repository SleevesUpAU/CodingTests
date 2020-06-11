import React from 'react';

import Button from 'src/components/Button';
import Screen from 'src/components/Screen';

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
