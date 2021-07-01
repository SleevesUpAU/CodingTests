import {v4 as uuidv4} from 'uuid';
import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {RootStackScreenProps} from 'src/navigators';

import Screen from 'src/components/Screen';
import Input from 'src/components/Forms/Input';
import Selector from 'src/components/Forms/Selector';
import Button from 'src/components/Button';
import Text from 'src/components/Text';

import parseUtil from 'src/utils/parseUtil';
import validationUtil from 'src/utils/validationUtil';

const styles = StyleSheet.create({
  error: {
    alignSelf: 'center',
  },
});

type Props = RootStackScreenProps<'CarDetail'>;

const AddCarScreen = ({
  navigation,
  route: {
    params: {car, onComplete},
  },
}: Props) => {
  const [initialPrice, setInitialPrice] = useState(
    car ? car.initialPrice.toString() : undefined,
  );
  const [currentPrice, setCurrentPrice] = useState(
    car && car.currentPrice ? car.currentPrice.toString() : undefined,
  );
  const [company, setCompany] = useState(car ? car.company : undefined);
  const [model, setModel] = useState(car ? car.model.toString() : undefined);

  const [hasError, setError] = useState(false);

  useEffect(() => setError(false), [
    initialPrice,
    currentPrice,
    company,
    model,
  ]);

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
      <Selector
        label="Company"
        value={company}
        options={['Dorf', 'Totoya', 'Volkspanzer']}
        onChange={setCompany}
      />
      <Input
        label="Model"
        keyboardType="ascii-capable"
        value={model}
        onChangeText={setModel}
      />
      {hasError && (
        <Text style={styles.error} isError>
          Looks like we are missing some data
        </Text>
      )}
      <Button
        text={car ? 'Save Car Details' : 'Add Car Entry'}
        disabled={hasError}
        onPress={() => {
          const initialPriceNumber = parseUtil.getFloat(initialPrice);
          const currentPriceNumber = parseUtil.getFloat(currentPrice);

          if (
            initialPriceNumber !== undefined &&
            currentPriceNumber !== undefined &&
            !!company &&
            !!model
          ) {
            onComplete({
              id: car ? car.id : uuidv4(),
              initialPrice: initialPriceNumber,
              currentPrice: currentPriceNumber,
              company,
              model,
            });
            navigation.goBack();
          } else {
            setError(true);
          }
        }}
      />
    </Screen>
  );
};

export default AddCarScreen;