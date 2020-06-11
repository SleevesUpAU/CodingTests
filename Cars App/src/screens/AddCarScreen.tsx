import React, {useState} from 'react';
import {Button, TextInput} from 'react-native';
import {RootStackScreenProps} from 'src/navigators';

import Screen from 'src/components/Screen';

import parseUtil from 'src/utils/parseUtil';

type Props = RootStackScreenProps<'AddCar'>;

const AddCarScreen = ({
  navigation,
  route: {
    params: {onAdd},
  },
}: Props) => {
  const [initialPrice, setInitialPrice] = useState<number>();
  const [currentPrice, setCurrentPrice] = useState<number>();
  const [company, setCompany] = useState<string>();

  return (
    <Screen>
      <TextInput
        keyboardType="decimal-pad"
        value={initialPrice !== undefined ? initialPrice.toString() : undefined}
        onChangeText={(text) => {
          const number = setInitialPrice(parseUtil.getFloat(text));
        }}
      />
      <TextInput
        keyboardType="decimal-pad"
        value={currentPrice !== undefined ? currentPrice.toString() : undefined}
        onChangeText={(text) => {
          const number = setCurrentPrice(parseUtil.getFloat(text));
        }}
      />
      <TextInput
        keyboardType="ascii-capable"
        value={company !== undefined ? company.toString() : undefined}
        onChangeText={(text) => setCompany(text)}
      />
      <Button
        title="Add Car"
        onPress={() => {
          if (
            initialPrice !== undefined &&
            currentPrice !== undefined &&
            !!company
          ) {
            onAdd({
              id: 1,
              initialPrice,
              currentPrice,
              company,
            });
            navigation.goBack();
          }
        }}
      />
    </Screen>
  );
};

export default AddCarScreen;
