import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Search: SearchScreen
},
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Demo Application"
    }
  }
);


export default createAppContainer(navigator);
