import React, {useState} from 'react';
import {Button, TextInput} from 'react-native';
import {RootStackScreenProps} from 'src/navigators';

import Screen from 'src/components/Screen';

type Props = RootStackScreenProps<'AddCar'>;

const AddCarScreen = ({
  navigation,
  route: {
    params: {onAdd},
  },
}: Props) => {
  return (
    <Screen>
      <TextInput />
      <Button
        title="Add Car"
        onPress={() => {
          onAdd({
            id: 2,
            initialPrice: 400,
            currentPrice: 200,
            company: 'ASDSA',
          });
          navigation.goBack();
        }}
      />
    </Screen>
  );
};

export default AddCarScreen;
