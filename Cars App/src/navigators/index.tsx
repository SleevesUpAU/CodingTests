import * as React from 'react';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';

import DashboardScreen from 'src/screens/DashboardScreen';
import CarDetailScreen from 'src/screens/CarDetailScreen';

import {color} from 'src/styles';

type RootStackParamList = {
  Dashboard: undefined;
  CarDetail: {
    onComplete: (car: Car) => void;
  };
};

export type RootStackScreenProps<
  RouteName extends keyof RootStackParamList
> = StackScreenProps<RootStackParamList, RouteName>;

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => (
  <Stack.Navigator
    initialRouteName="Dashboard"
    screenOptions={{
      headerStyle: {
        backgroundColor: color.primaryLight,
      },
      headerTintColor: color.black,
    }}>
    <Stack.Screen name="Dashboard" component={DashboardScreen} />
    <Stack.Screen name="CarDetail" component={CarDetailScreen} />
  </Stack.Navigator>
);

export default RootStack;
