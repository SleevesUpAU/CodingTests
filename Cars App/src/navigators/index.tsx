import * as React from 'react';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';

import DashboardScreen from 'src/screens/DashboardScreen';
import CarDetailScreen from 'src/screens/CarDetailScreen';
import AddCarScreen from 'src/screens/AddCarScreen';

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
    <Stack.Screen name="Dashboard" component={DashboardScreen} />
    <Stack.Screen name="CarDetails" component={CarDetailScreen} />
    <Stack.Screen name="AddCar" component={AddCarScreen} />
  </Stack.Navigator>
);

export default RootStack;
