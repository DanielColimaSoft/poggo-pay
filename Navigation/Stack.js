/* eslint-disable prettier/prettier */
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Views/Home/Home';
import CreditScreen from '../Views/Credit/Credit';
import ArticleScreen from '../Views/Articule/Articule';
import ServicesScreen from '../Views/Services/Services';

import React from 'react';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Credit" component={CreditScreen} />
        <Stack.Screen name="Article" component={ArticleScreen} />
        <Stack.Screen name="Services" component={ServicesScreen} />
    </Stack.Navigator>
  );
};