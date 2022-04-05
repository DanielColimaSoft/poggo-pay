/* eslint-disable prettier/prettier */
/* eslint-disable no-lone-blocks */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import HomeScreen from '../Views/Home/Home';
import CreditScreen from '../Views/Credit/Credit';
import ArticuleScreen from '../Views/Articule/Articule';
import ServicesScreen from '../Views/Services/Services';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import FAIcon from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, Image, TouchableHighlight, Text} from 'react-native';
import { useState } from 'react';

const Tab = createMaterialBottomTabNavigator();

export const BottomTab = () => {

  // const [HomeActive, setHomeActive] = useState(renderHomeImage);
  // const onPress = () => {setHomeActive(renderHomeActiveImage)};

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#FB8500"
      inactiveColor="#023047"
      labeled={false}
      shifting={false}
      barStyle={{backgroundColor: '#DFF1F9'}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Credit"
        component={CreditScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <MCIcon name="credit-card-plus" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Article"
        component={ArticuleScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="calendar-alt" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="briefcase-medical" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
