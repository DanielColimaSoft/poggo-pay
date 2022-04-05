/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { BottomTab } from './Navigation/BottomTab';
import { Styles } from './Styles/PoggoPayStyles';


const App = () => {
  const navTheme = DefaultTheme;
    navTheme.colors.background = '#FFFBE7';
  return (
    <>
      <NavigationContainer theme={navTheme}>
        <BottomTab/>
      </NavigationContainer>
    </>
  );
};

export default App;
