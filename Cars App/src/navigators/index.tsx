import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from 'src/screens/Dashboard';

type StackParamList = {
  Dashboard: {};
};

const Stack = createStackNavigator<StackParamList>();

const RootStack = () => (
  <Stack.Navigator initialRouteName="Dashboard">
    <Stack.Screen name="Dashboard" component={Dashboard} />
  </Stack.Navigator>
);

export default RootStack;
