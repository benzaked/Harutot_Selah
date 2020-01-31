import React from 'react';
import { Platform, Dimensions } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import{createDrawerNavigator} from 'react-navigation-drawer'
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen'
import SitesCatalog from '../screens/SitesCatalog'

import MenuDrawer from '../components/MenuDrawer';

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
        screen: LoginScreen
    },
    Home: {
      screen: HomeScreen,
    },
    Links: {
      screen: LinksScreen,
    },
    SitesCatalog:{
        screen: SitesCatalog,
    }
  },
  DrawerConfig
);

export default createAppContainer(DrawerNavigator);
