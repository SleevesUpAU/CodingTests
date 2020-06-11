import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from 'src/screens/Dashboard';
import CarDetails from 'src/screens/CarDetails';

type StackParamList = {
  Dashboard: {};
  CarDetails: {};
};

const Stack = createStackNavigator<StackParamList>();

const RootStack = () => (
  <Stack.Navigator initialRouteName="Dashboard">
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="CarDetails" component={CarDetails} />
  </Stack.Navigator>
);

export default RootStack;
