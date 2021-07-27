import {FontAwesome, Feather} from '@expo/vector-icons';
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Profile } from './Profile';
import { PostsStack } from './Posts';

import global from '../globalStyle.json';

const Tab = createBottomTabNavigator();

export function TabMain(){

  return(
    <Tab.Navigator
    initialRouteName="Profile"
    tabBarOptions={{
      activeTintColor: '#ffffff',
      inactiveTintColor: '#e0e0e0',
      inactiveBackgroundColor: global.primaryColor,
      activeBackgroundColor: global.quaternaryColor
    }}
  >
    <Tab.Screen 
      name="Posts"
      component={PostsStack}
      options={{
        tabBarLabel:'Posts',
        tabBarIcon:({color}) =>(
          <FontAwesome name={'comments'} size={20} color={color} />
        ),
      }}
      />
    <Tab.Screen 
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel:'Profile',
        tabBarIcon:({color}) =>(
          <Feather name={'user'} size={20} color={color} />
        ),
      }}
    /> 
  </Tab.Navigator>
  ) 
}