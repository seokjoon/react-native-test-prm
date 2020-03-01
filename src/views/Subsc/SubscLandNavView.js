import {
  createAppContainer,
} from 'react-navigation';
import {
  createStackNavigator,
} from '@react-navigation/stack'

import React from 'react'
import SubscLandView from './SubscLandView'

const NavStack = createStackNavigator(
  {
    SubscLandView: {
      screen: SubscLandView,
    },
  },
  {
    initialRouteName: 'SubscLandView',
    defaultNavigationOptions: Const.navBottom.defaultNavigationOptions,
  },
)

const SubscLandNavView = createAppContainer(NavStack)

export default SubscLandNavView
