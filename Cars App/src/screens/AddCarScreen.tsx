import React from 'react';
import {Button} from 'react-native';
import {RootStackScreenProps} from 'src/navigators';

import Screen from 'src/components/Screen';

type Props = RootStackScreenProps<'AddCar'>;

const AddCarScreen = ({navigation}: Props) => (
  <Screen>
    <Button
      title="Add Car"
      onPress={() => {
        navigation.goBack();
      }}
    />
  </Screen>
);

export default AddCarScreen;
