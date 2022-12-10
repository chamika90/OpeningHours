import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAVIGATION_SCREENS} from '../config/constants';

import Home from '../screens/home/Home';
import {theme} from '../config/theme';

const {colors} = theme;

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
    initialRouteName={NAVIGATION_SCREENS.HOME}
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.primaryHeaderColor,
      },
      headerTitleAlign: 'center',
    }}>
    <HomeStack.Screen
      name={NAVIGATION_SCREENS.HOME}
      component={Home}
      options={{title: 'Home'}}
    />
  </HomeStack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStackScreen />
    </NavigationContainer>
  );
};

export default AppNavigator;
