import React from 'react';
import { Platform, Dimensions } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import{createDrawerNavigator} from 'react-navigation-drawer'
// import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen'
import StackNavigator from './StackNavigator'
import Game_menu from '../screens/Game_menu';

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
    SitesCatalog:{
      screen: SitesCatalog,
  },
    StackNavigator:{
        screen: StackNavigator,
    },
    Game_menu:{
      screen: Game_menu,
    },
    
  },
  DrawerConfig
);

export default createAppContainer(DrawerNavigator);
