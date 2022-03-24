import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const WalletStack = createStackNavigator(
  {
    Wallet: HomeScreen,
  },
  config
);

WalletStack.navigationOptions = {
  tabBarLabel: 'Inicio',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      // name={
      //   Platform.OS === 'ios'
      //     ? `ios-information-circle${focused ? '' : '-outline'}`
      //     : 'md-information-circle'
      // }
      name={Platform.OS === 'ios' ? 'ios-wallet' : 'md-wallet'}
    />
  ),
};

WalletStack.path = '';

const ScannerStack = createStackNavigator(
  {
    Scanner: LinksScreen,
  },
  config
);

ScannerStack.navigationOptions = {
  tabBarLabel: 'Scanner',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-qr-scanner' : 'md-qr-scanner'} />
  ),
};

ScannerStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: SettingsScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contacts' : 'md-contacts'} />
  ),
};

ProfileStack.path = '';

const BarcodeStack = createStackNavigator(
  {
    Barcode: SettingsScreen,
  },
  config
);

BarcodeStack.navigationOptions = {
  tabBarLabel: 'Barcode',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-barcode' : 'md-barcode'} />
  ),
};

BarcodeStack.path = '';

const tabNavigator = createBottomTabNavigator({
  WalletStack,
  BarcodeStack,
  ScannerStack,
  ProfileStack
});

tabNavigator.path = '';

export default tabNavigator;
