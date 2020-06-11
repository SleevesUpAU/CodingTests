import {v4 as uuidv4} from 'uuid';
import React, {useState} from 'react';
import {RootStackScreenProps} from 'src/navigators';

import Screen from 'src/components/Screen';
import Input from 'src/components/Input';
import Button from 'src/components/Button';

import parseUtil from 'src/utils/parseUtil';
import validationUtil from 'src/utils/validationUtil';

type Props = RootStackScreenProps<'CarDetail'>;

const AddCarScreen = ({
  navigation,
  route: {
    params: {onComplete},
  },
}: Props) => {
  const [initialPrice, setInitialPrice] = useState<string>();
  const [currentPrice, setCurrentPrice] = useState<string>();
  const [company, setCompany] = useState<string>();

  const handleNumberChange = (setString: (text: string) => void) => (
    text: string,
  ) => {
    if (validationUtil.isFloatString(text)) {
      setString(text);
    }
  };

  return (
    <Screen>
      <Input
        label="Initial Price ($)"
        keyboardType="decimal-pad"
        value={initialPrice}
        onChangeText={handleNumberChange(setInitialPrice)}
      />
      <Input
        label="Current Price ($)"
        keyboardType="decimal-pad"
        value={currentPrice}
        onChangeText={handleNumberChange(setCurrentPrice)}
      />
      <Input
        label="Company"
        keyboardType="ascii-capable"
        value={company}
        onChangeText={setCompany}
      />
      <Button
        text="Add Car"
        onPress={() => {
          const initialPriceNumber = parseUtil.getFloat(initialPrice);
          const currentPriceNumber = parseUtil.getFloat(currentPrice);

          if (
            initialPriceNumber !== undefined &&
            currentPriceNumber !== undefined &&
            !!company
          ) {
            onComplete({
              id: uuidv4(),
              initialPrice: initialPriceNumber,
              currentPrice: currentPriceNumber,
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
