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
  const [initialPrice, setInitialPrice] = useState<string>();
  const [currentPrice, setCurrentPrice] = useState<string>();
  const [company, setCompany] = useState<string>();

  const handleNumberChange = (setString: (text: string) => void) => (
    text: string,
  ) => {
    if (parseUtil.isValidFloatString(text)) {
      setString(text);
    }
  };

  return (
    <Screen>
      <TextInput
        keyboardType="decimal-pad"
        placeholder="Initial Price"
        value={initialPrice}
        onChangeText={handleNumberChange(setInitialPrice)}
      />
      <TextInput
        keyboardType="decimal-pad"
        placeholder="Current Price"
        value={currentPrice}
        onChangeText={handleNumberChange(setCurrentPrice)}
      />
      <TextInput
        keyboardType="ascii-capable"
        placeholder="Company"
        value={company}
        onChangeText={setCompany}
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
