import {
  createAppContainer,
} from 'react-navigation'
import {
  createBottomTabNavigator,
} from 'react-navigation-tabs'

import React from 'react'
import { Image } from 'react-native'

import NavigationService from './NavigationService'
import SubscLandNavView from '../views/Subsc/SubscLandNavView'

const NavBottom = createBottomTabNavigator(
  {
    'plus': {
      screen: SubscLandNavView,
      navigationOptions: {
        tabBarIcon: <Image source={require('../imgs/icon/done.png')} style={{ with: 24, height: 24 }}/>,
      },
    },
  },
)

const IndexNav = createAppContainer(NavBottom)

export default class Index extends React.Component {
  render () {
    return (
      <IndexNav
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}
      />
    )
  }
};
