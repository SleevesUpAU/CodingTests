import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from 'src/screens/Dashboard';
import CarDetails from 'src/screens/CarDetails';

export type RootStackParamList = {
  Dashboard: undefined;
  CarDetails: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => (
  <Stack.Navigator initialRouteName="Dashboard">
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="CarDetails" component={CarDetails} />
  </Stack.Navigator>
);

export default RootStack;
