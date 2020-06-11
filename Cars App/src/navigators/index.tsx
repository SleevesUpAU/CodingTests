import * as React from 'react';
import {Button} from 'react-native';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';

import Dashboard from 'src/screens/Dashboard';
import CarDetails from 'src/screens/CarDetails';
import AddCar from 'src/screens/AddCar';

type RootStackParamList = {
  Dashboard: undefined;
  CarDetails: undefined;
  AddCar: undefined;
};

export type RootStackScreenProps<
  RouteName extends keyof RootStackParamList
> = StackScreenProps<RootStackParamList, RouteName>;

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => (
  <Stack.Navigator initialRouteName="Dashboard">
    <Stack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        headerRight: () => (
          <Button
            onPress={() => console.log('This is a button!')}
            title="Info"
          />
        ),
      }}
    />
    <Stack.Screen name="CarDetails" component={CarDetails} />
    <Stack.Screen name="AddCar" component={AddCar} />
  </Stack.Navigator>
);

export default RootStack;
