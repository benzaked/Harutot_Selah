import React from 'react';
import { Platform, Dimensions } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import{createDrawerNavigator} from 'react-navigation-drawer'
// import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen'
import LoggedInPage from '../screens/LoggedInPage'
import StackNavigator from './StackNavigator'
import test from './test'

import SitesCatalog from '../screens/SitesCatalog'

import MenuDrawer from '../components/MenuDrawer';
import Map from '../components/Map';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.83,
  contentComponent: ({ navigation }) => {
    return <MenuDrawer navigation={navigation} />;
  },
};

const DrawerNavigator = createDrawerNavigator(
  {

   
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
          header: null,
          drawerLockMode: "locked-closed",
          disableGestures: true
        }
    },
    Home: {
      screen: HomeScreen,
    },
    Links: {
      screen: LinksScreen,
    },
    StackNavigator:{
        screen: StackNavigator,
    },
    Map:{
      screen: Map
    }
   
    
  },
  DrawerConfig
);

export default createAppContainer(DrawerNavigator);
